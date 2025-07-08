import { TaskOrchestratorConfig } from '@/logic/core/task/orchestrator/config';
import { resetTodoMock } from '@/logic/api/mock/todoWAS';
import { resetCancelMock } from '@/logic/api/mock/cancelWAS';
import { resetDoneMock } from '@/logic/api/mock/doneWAS';
import { ref } from 'vue';

describe('TodoDataPipeline', () => {
    let orchestrator;
    let summaryState = ref({});
    let todoState = ref({});
    let doneState = ref([]);

    beforeEach(async () => {
        resetTodoMock();
        resetCancelMock();
        resetDoneMock();
        summaryState.value = {};
        todoState.value = {};
        doneState.value = [];
        orchestrator = TaskOrchestratorConfig(todoState, doneState, summaryState);
        await orchestrator.command('Todo', 'loadData', {});
        await orchestrator.command('Done', 'loadData', {});
        await orchestrator.command('Cancel', 'loadData', {});
        await orchestrator.command('Summary', 'loadData', {});
    });

    // Todo Single 추가 -> Summary: Todo+1
    it('Todo:SingleCreate & Summary:loadData ', async() => {
        await orchestrator.command('Todo', 'singleCreate', '커피챗');
        expect(todoState.value).toStrictEqual(['팀업무', '개인업무', '타팀자료요청', '커피챗']);

        expect(summaryState.value).toStrictEqual({
            Todo: 4,
            Cancel: 3,
            Done: 3,
        });
    });

    // Todo Batch 추가 -> Summary: Todo+1
    it('Todo:BatchCreate & Summary:loadData ', async() => {
        await orchestrator.command('Todo', 'batchCreate', ['업무1', '업무2']);
        expect(todoState.value).toStrictEqual(['팀업무', '개인업무', '타팀자료요청', '업무1', '업무2']);

        expect(summaryState.value).toStrictEqual({
            Todo: 5,
            Cancel: 3,
            Done: 3,
        });
    });

    // Todo Single 취소 -> Cancel Single 추가 -> Summary: Todo-1, Cancel+1
    it('Todo:SingleCancel & Cancel:loadData & Summary:loadData ', async() => {
        await orchestrator.command('Todo', 'singleCancel', '개인업무');
        expect(todoState.value).toStrictEqual(['팀업무', '타팀자료요청']);

        const result2 = await orchestrator.command('Cancel', 'loadData', {});
        expect(result2).toStrictEqual(['팀행사준비', '독후감작성', '오전반차', '개인업무']);

        expect(summaryState.value).toStrictEqual({
            Todo: 2,
            Cancel: 4,
            Done: 3,
        });
    });

    // Todo Batch 취소 -> Cancel Batch 추가 -> Summary: Todo-2, Cancel+2
    it('Todo:BatchCancel & Cancel:loadData & Summary:loadData ', async() => {
        await orchestrator.command('Todo', 'batchCancel', ['개인업무', '타팀자료요청']);
        expect(todoState.value).toStrictEqual(['팀업무']);

        const result2 = await orchestrator.command('Cancel', 'loadData', {});
        expect(result2).toStrictEqual(['팀행사준비', '독후감작성', '오전반차', '개인업무', '타팀자료요청']);

        expect(summaryState.value).toStrictEqual({
            Todo: 1,
            Cancel: 5,
            Done: 3,
        });
    });

    // Todo Single 완료 -> Done 추가 -> Summary: Todo-1, Done+1
    it('Todo:SingleDone & Done:loadData & Summary:loadData ', async() => {
        await orchestrator.command('Todo', 'singleDone', '개인업무');
        expect(todoState.value).toStrictEqual(['팀업무', '타팀자료요청']);

        expect(doneState.value).toStrictEqual(['분기계획작성', '운영인수인계', '화상회의', '개인업무']);

        expect(summaryState.value).toStrictEqual({
            Todo: 2,
            Cancel: 3,
            Done: 4,
        });
    });

    // Todo Batch 완료 -> Done 추가 -> Summary: Todo-3, Done+3
    it('Todo:BatchDone & Done:loadData & Summary:loadData ', async() => {
        await orchestrator.command('Todo', 'batchDone', ['개인업무', '팀업무', '타팀자료요청']);
        expect(todoState.value).toStrictEqual([]);

        expect(doneState.value).toStrictEqual(['분기계획작성', '운영인수인계', '화상회의', '개인업무', '팀업무', '타팀자료요청']);

        expect(summaryState.value).toStrictEqual({
            Todo: 0,
            Cancel: 3,
            Done: 6,
        });
    });

    // Todo Single 삭제 -> Summary: Todo-1
    it('Todo:SingleDelete & Summary:loadData ', async() => {
        await orchestrator.command('Todo', 'singleDelete', '타팀자료요청');
        expect(todoState.value).toStrictEqual(['팀업무', '개인업무']);

        expect(summaryState.value).toStrictEqual({
            Todo: 2,
            Cancel: 3,
            Done: 3,
        });
    });

    // Todo Batch 삭제 -> Summary: Todo-2
    it('Todo:BatchDelete & Summary:loadData ', async() => {
        await orchestrator.command('Todo', 'batchDelete', ['팀업무', '타팀자료요청']);
        expect(todoState.value).toStrictEqual(['개인업무']);

        expect(summaryState.value).toStrictEqual({
            Todo: 1,
            Cancel: 3,
            Done: 3,
        });
    });

    // Cancel Single 삭제 -> Summary: Cancel-1
    it('Cancel:SingleDeleteData & Summary:loadData ', async() => {
        const result1 = await orchestrator.command('Cancel', 'singleDeleteLoad', '팀행사준비');
        expect(result1).toStrictEqual(['독후감작성', '오전반차']);

        expect(summaryState.value).toStrictEqual({
            Todo: 3,
            Cancel: 2,
            Done: 3,
        });
    });

    // Cancel Batch 삭제 -> Summary: Cancel-2
    it('Cancel:BatchDeleteData & Summary:loadData ', async() => {
        const result1 = await orchestrator.command('Cancel', 'batchDeleteLoad', ['독후감작성', '팀행사준비']);
        expect(result1).toStrictEqual(['오전반차']);

        expect(summaryState.value).toStrictEqual({
            Todo: 3,
            Cancel: 1,
            Done: 3,
        });
    });

    // Cancel Single 복원 -> Summary: Cancel-1 -> Todo: Single 추가 -> Summary: Todo+1
    it('Cancel:SingleRevertData & Todo:SingleCreate & Summary:loadData ', async() => {
        const result1 = await orchestrator.command('Cancel', 'singleRevertLoad', '독후감작성');
        expect(result1).toStrictEqual(['팀행사준비', '오전반차']);

        expect(todoState.value).toStrictEqual(['팀업무', '개인업무', '타팀자료요청', '독후감작성']);

        expect(summaryState.value).toStrictEqual({
            Todo: 4,
            Cancel: 2,
            Done: 3,
        });
    });

    // Cancel Batch 복원 -> Summary: Cancel-1 -> Todo: Single 추가 -> Summary: Todo+1
    it('Cancel:BatchRevertData & Todo:BatchCreate & Summary:loadData ', async() => {
        const result1 = await orchestrator.command('Cancel', 'batchRevertLoad', ['독후감작성', '오전반차']);
        expect(result1).toStrictEqual(['팀행사준비']);

        expect(todoState.value).toStrictEqual(['팀업무', '개인업무', '타팀자료요청', '독후감작성', '오전반차']);

        expect(summaryState.value).toStrictEqual({
            Todo: 5,
            Cancel: 1,
            Done: 3,
        });
    });

    // Done Single 삭제 -> Summary: Done-1
    it('Done:SingleDelete & Summary:loadData ', async() => {
        await orchestrator.command('Done', 'singleDelete', '운영인수인계');
        expect(doneState.value).toStrictEqual(['분기계획작성', '화상회의']);

        expect(summaryState.value).toStrictEqual({
            Todo: 3,
            Cancel: 3,
            Done: 2,
        });
    });

    // Done Batch 삭제 -> Summary: Done-1
    it('Done:BatchDelete & Summary:loadData ', async() => {
        await orchestrator.command('Done', 'batchDelete', ['운영인수인계', '화상회의']);
        expect(doneState.value).toStrictEqual(['분기계획작성']);

        expect(summaryState.value).toStrictEqual({
            Todo: 3,
            Cancel: 3,
            Done: 1,
        });
    });

    // Done Single 복원 -> Summary: Done-1 -> Todo: Single 추가 -> Summary: Todo+1
    it('Done:SingleRevert & Todo:CreateData & Summary:loadData ', async() => {
        await orchestrator.command('Done', 'singleRevert', '분기계획작성');
        expect(doneState.value).toStrictEqual(['운영인수인계', '화상회의']);

        expect(todoState.value).toStrictEqual(['팀업무', '개인업무', '타팀자료요청', '분기계획작성']);

        expect(summaryState.value).toStrictEqual({
            Todo: 4,
            Cancel: 3,
            Done: 2,
        });
    });

    // Done Batch 복원 -> Summary: Done-1 -> Todo: Batch 추가 -> Summary: Todo+1
    it('Done:SingleRevert & Todo:CreateData & Summary:loadData ', async() => {
        await orchestrator.command('Done', 'batchRevert', ['분기계획작성',  '화상회의']);
        expect(doneState.value).toStrictEqual(['운영인수인계']);

        expect(todoState.value).toStrictEqual(['팀업무', '개인업무', '타팀자료요청', '분기계획작성', '화상회의']);

        expect(summaryState.value).toStrictEqual({
            Todo: 5,
            Cancel: 3,
            Done: 1,
        });
    });
});