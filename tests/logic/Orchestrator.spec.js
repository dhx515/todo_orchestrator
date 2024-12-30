import { TaskOrchestratorConfig } from '@/logic/core/task/orchestrator/config';

describe('TodoDataPipeline', () => {
    let orchestrator;

    beforeEach(async () => {
        orchestrator = TaskOrchestratorConfig();
        await orchestrator.command('Todo', 'loadData', {});
        await orchestrator.command('Done', 'loadData', {});
        await orchestrator.command('Cancel', 'loadData', {});
        await orchestrator.command('Summary', 'loadData', {});
    });

    // Todo 추가 -> Summary: Todo+1
    it('Todo:CreateData & Summary:loadData ', async() => {
        const result1 = await orchestrator.command('Todo', 'createLoad', '커피챗');
        expect(result1).toStrictEqual(['팀업무', '개인업무', '타팀자료요청', '커피챗']);

        const result2 = await orchestrator.command('Summary', 'loadData', {});
        expect(result2).toStrictEqual({
            Todo: 4,
            Cancel: 3,
            Done: 3,
        });
    });

    // Todo 취소 -> Cancel 추가 -> Summary: Todo-1, Cancel+1
    it('Todo:CancelData & Cancel:loadData & Summary:loadData ', async() => {
        const result1 = await orchestrator.command('Todo', 'cancelLoad', '개인업무');
        expect(result1).toStrictEqual(['팀업무', '타팀자료요청']);

        const result2 = await orchestrator.command('Cancel', 'loadData', {});
        expect(result2).toStrictEqual(['팀행사준비', '독후감작성', '오전반차', '개인업무']);

        const result3 = await orchestrator.command('Summary', 'loadData', {});
        expect(result3).toStrictEqual({
            Todo: 2,
            Cancel: 4,
            Done: 3,
        });
    });

    // Todo 완료 -> Done 추가 -> Summary: Todo-1, Done+1
    it('Todo:DoneData & Done:loadData & Summary:loadData ', async() => {
        const result1 = await orchestrator.command('Todo', 'doneLoad', '개인업무');
        expect(result1).toStrictEqual(['팀업무', '타팀자료요청']);

        const result2 = await orchestrator.command('Done', 'loadData', {});
        expect(result2).toStrictEqual(['분기계획작성', '운영인수인계', '화상회의', '개인업무']);

        const result3 = await orchestrator.command('Summary', 'loadData', {});
        expect(result3).toStrictEqual({
            Todo: 2,
            Cancel: 3,
            Done: 4,
        });
    });

    // Todo 삭제 -> Summary: Todo-1
    it('Todo:DeleteData & Summary:loadData ', async() => {
        const result1 = await orchestrator.command('Todo', 'deleteLoad', '타팀자료요청');
        expect(result1).toStrictEqual(['팀업무', '개인업무']);

        const result2 = await orchestrator.command('Summary', 'loadData', {});
        expect(result2).toStrictEqual({
            Todo: 2,
            Cancel: 3,
            Done: 3,
        });
    });

    // Cancel 삭제 -> Summary: Cancel-1
    it('Cancel:DeleteData & Summary:loadData ', async() => {
        const result1 = await orchestrator.command('Cancel', 'deleteLoad', '팀행사준비');
        expect(result1).toStrictEqual(['독후감작성', '오전반차']);

        const result2 = await orchestrator.command('Summary', 'loadData', {});
        expect(result2).toStrictEqual({
            Todo: 3,
            Cancel: 2,
            Done: 3,
        });
    });

    // Cancel 복원 -> Summary: Cancel-1 -> Todo: 추가 -> Summary: Todo+1
    it('Cancel:RevertData & Todo:CreateData & Summary:loadData ', async() => {
        const result1 = await orchestrator.command('Cancel', 'revertLoad', '독후감작성');
        expect(result1).toStrictEqual(['팀행사준비', '오전반차']);

        const result2 = await orchestrator.command('Todo', 'loadData', {});
        expect(result2).toStrictEqual(['팀업무', '개인업무', '타팀자료요청', '독후감작성']);

        const result3 = await orchestrator.command('Summary', 'loadData', {});
        expect(result3).toStrictEqual({
            Todo: 4,
            Cancel: 2,
            Done: 3,
        });
    });

    // Done 삭제 -> Summary: Done-1
    it('Done:DeleteData & Summary:loadData ', async() => {
        const result1 = await orchestrator.command('Done', 'deleteLoad', '운영인수인계');
        expect(result1).toStrictEqual(['분기계획작성', '화상회의']);

        const result2 = await orchestrator.command('Summary', 'loadData', {});
        expect(result2).toStrictEqual({
            Todo: 3,
            Cancel: 3,
            Done: 2,
        });
    });

    // Done 복원 -> Summary: Done-1 -> Todo: 추가 -> Summary: Todo+1
    it('Done:RevertData & Todo:CreateData & Summary:loadData ', async() => {
        const result1 = await orchestrator.command('Done', 'revertLoad', '분기계획작성');
        expect(result1).toStrictEqual(['운영인수인계', '화상회의']);

        const result2 = await orchestrator.command('Todo', 'loadData', {});
        expect(result2).toStrictEqual(['팀업무', '개인업무', '타팀자료요청', '분기계획작성']);

        const result3 = await orchestrator.command('Summary', 'loadData', {});
        expect(result3).toStrictEqual({
            Todo: 4,
            Cancel: 3,
            Done: 2,
        });
    });
});