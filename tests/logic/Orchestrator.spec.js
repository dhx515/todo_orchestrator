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

    // Todo Single 추가 -> Summary: Todo+1
    it('Todo:SingleCreateLoad & Summary:loadData ', async() => {
        const result1 = await orchestrator.command('Todo', 'singleCreateLoad', '커피챗');
        expect(result1).toStrictEqual(['팀업무', '개인업무', '타팀자료요청', '커피챗']);

        const result2 = await orchestrator.command('Summary', 'loadData', {});
        expect(result2).toStrictEqual({
            Todo: 4,
            Cancel: 3,
            Done: 3,
        });
        expect(orchestrator.getPipelineStatusVersion()).toStrictEqual(
            { 
                'Todo': 1, 
                'Done': 0, 
                'Cancel': 0, 
                'Summary': 1 
            }
        );
    });

    // Todo Batch 추가 -> Summary: Todo+1
    it('Todo:BatchCreateLoad & Summary:loadData ', async() => {
        const result1 = await orchestrator.command('Todo', 'batchCreateLoad', ['업무1', '업무2']);
        expect(result1).toStrictEqual(['팀업무', '개인업무', '타팀자료요청', '업무1', '업무2']);

        const result2 = await orchestrator.command('Summary', 'loadData', {});
        expect(result2).toStrictEqual({
            Todo: 5,
            Cancel: 3,
            Done: 3,
        });

        expect(orchestrator.getPipelineStatusVersion()).toStrictEqual(
            { 
                'Todo': 1, 
                'Done': 0, 
                'Cancel': 0, 
                'Summary': 1 
            }
        );
    });

    // Todo Single 취소 -> Cancel Single 추가 -> Summary: Todo-1, Cancel+1
    it('Todo:SingleCancelData & Cancel:loadData & Summary:loadData ', async() => {
        const result1 = await orchestrator.command('Todo', 'singleCancelLoad', '개인업무');
        expect(result1).toStrictEqual(['팀업무', '타팀자료요청']);

        const result2 = await orchestrator.command('Cancel', 'loadData', {});
        expect(result2).toStrictEqual(['팀행사준비', '독후감작성', '오전반차', '개인업무']);

        const result3 = await orchestrator.command('Summary', 'loadData', {});
        expect(result3).toStrictEqual({
            Todo: 2,
            Cancel: 4,
            Done: 3,
        });

        expect(orchestrator.getPipelineStatusVersion()).toStrictEqual(
            { 
                'Todo': 1, 
                'Done': 0, 
                'Cancel': 1, 
                'Summary': 2 
            }
        );
    });

    // Todo Batch 취소 -> Cancel Batch 추가 -> Summary: Todo-2, Cancel+2
    it('Todo:BatchCancelData & Cancel:loadData & Summary:loadData ', async() => {
        const result1 = await orchestrator.command('Todo', 'batchCancelLoad', ['개인업무', '타팀자료요청']);
        expect(result1).toStrictEqual(['팀업무']);

        const result2 = await orchestrator.command('Cancel', 'loadData', {});
        expect(result2).toStrictEqual(['팀행사준비', '독후감작성', '오전반차', '개인업무', '타팀자료요청']);

        const result3 = await orchestrator.command('Summary', 'loadData', {});
        expect(result3).toStrictEqual({
            Todo: 1,
            Cancel: 5,
            Done: 3,
        });

        expect(orchestrator.getPipelineStatusVersion()).toStrictEqual(
            { 
                'Todo': 1, 
                'Done': 0, 
                'Cancel': 1, 
                'Summary': 2 
            }
        );
    });

    // Todo Single 완료 -> Done 추가 -> Summary: Todo-1, Done+1
    it('Todo:SingleDoneData & Done:loadData & Summary:loadData ', async() => {
        const result1 = await orchestrator.command('Todo', 'singleDoneLoad', '개인업무');
        expect(result1).toStrictEqual(['팀업무', '타팀자료요청']);

        const result2 = await orchestrator.command('Done', 'loadData', {});
        expect(result2).toStrictEqual(['분기계획작성', '운영인수인계', '화상회의', '개인업무']);

        const result3 = await orchestrator.command('Summary', 'loadData', {});
        expect(result3).toStrictEqual({
            Todo: 2,
            Cancel: 3,
            Done: 4,
        });

        expect(orchestrator.getPipelineStatusVersion()).toStrictEqual(
            { 
                'Todo': 1, 
                'Done': 1, 
                'Cancel': 0, 
                'Summary': 2 
            }
        );
    });

    // Todo Batch 완료 -> Done 추가 -> Summary: Todo-3, Done+3
    it('Todo:BatchDoneData & Done:loadData & Summary:loadData ', async() => {
        const result1 = await orchestrator.command('Todo', 'batchDoneLoad', ['개인업무', '팀업무', '타팀자료요청']);
        expect(result1).toStrictEqual([]);

        const result2 = await orchestrator.command('Done', 'loadData', {});
        expect(result2).toStrictEqual(['분기계획작성', '운영인수인계', '화상회의', '개인업무', '팀업무', '타팀자료요청']);

        const result3 = await orchestrator.command('Summary', 'loadData', {});
        expect(result3).toStrictEqual({
            Todo: 0,
            Cancel: 3,
            Done: 6,
        });

        expect(orchestrator.getPipelineStatusVersion()).toStrictEqual(
            { 
                'Todo': 1, 
                'Done': 1, 
                'Cancel': 0, 
                'Summary': 2 
            }
        );
    });

    // Todo Single 삭제 -> Summary: Todo-1
    it('Todo:SingleDeleteData & Summary:loadData ', async() => {
        const result1 = await orchestrator.command('Todo', 'singleDeleteLoad', '타팀자료요청');
        expect(result1).toStrictEqual(['팀업무', '개인업무']);

        const result2 = await orchestrator.command('Summary', 'loadData', {});
        expect(result2).toStrictEqual({
            Todo: 2,
            Cancel: 3,
            Done: 3,
        });

        expect(orchestrator.getPipelineStatusVersion()).toStrictEqual(
            { 
                'Todo': 1, 
                'Done': 0, 
                'Cancel': 0, 
                'Summary': 1 
            }
        );
    });

    // Todo Batch 삭제 -> Summary: Todo-2
    it('Todo:BatchDeleteData & Summary:loadData ', async() => {
        const result1 = await orchestrator.command('Todo', 'batchDeleteLoad', ['팀업무', '타팀자료요청']);
        expect(result1).toStrictEqual(['개인업무']);

        const result2 = await orchestrator.command('Summary', 'loadData', {});
        expect(result2).toStrictEqual({
            Todo: 1,
            Cancel: 3,
            Done: 3,
        });

        expect(orchestrator.getPipelineStatusVersion()).toStrictEqual(
            { 
                'Todo': 1, 
                'Done': 0, 
                'Cancel': 0, 
                'Summary': 1 
            }
        );
    });

    // Cancel Single 삭제 -> Summary: Cancel-1
    it('Cancel:SingleDeleteData & Summary:loadData ', async() => {
        const result1 = await orchestrator.command('Cancel', 'singleDeleteLoad', '팀행사준비');
        expect(result1).toStrictEqual(['독후감작성', '오전반차']);

        const result2 = await orchestrator.command('Summary', 'loadData', {});
        expect(result2).toStrictEqual({
            Todo: 3,
            Cancel: 2,
            Done: 3,
        });

        expect(orchestrator.getPipelineStatusVersion()).toStrictEqual(
            { 
                'Todo': 0, 
                'Done': 0, 
                'Cancel': 1, 
                'Summary': 1 
            }
        );
    });

    // Cancel Batch 삭제 -> Summary: Cancel-2
    it('Cancel:BatchDeleteData & Summary:loadData ', async() => {
        const result1 = await orchestrator.command('Cancel', 'batchDeleteLoad', ['독후감작성', '팀행사준비']);
        expect(result1).toStrictEqual(['오전반차']);

        const result2 = await orchestrator.command('Summary', 'loadData', {});
        expect(result2).toStrictEqual({
            Todo: 3,
            Cancel: 1,
            Done: 3,
        });

        expect(orchestrator.getPipelineStatusVersion()).toStrictEqual(
            { 
                'Todo': 0, 
                'Done': 0, 
                'Cancel': 1, 
                'Summary': 1 
            }
        );
    });

    // Cancel Single 복원 -> Summary: Cancel-1 -> Todo: Single 추가 -> Summary: Todo+1
    it('Cancel:SingleRevertData & Todo:SingleCreateData & Summary:loadData ', async() => {
        const result1 = await orchestrator.command('Cancel', 'singleRevertLoad', '독후감작성');
        expect(result1).toStrictEqual(['팀행사준비', '오전반차']);

        const result2 = await orchestrator.command('Todo', 'loadData', {});
        expect(result2).toStrictEqual(['팀업무', '개인업무', '타팀자료요청', '독후감작성']);

        const result3 = await orchestrator.command('Summary', 'loadData', {});
        expect(result3).toStrictEqual({
            Todo: 4,
            Cancel: 2,
            Done: 3,
        });

        expect(orchestrator.getPipelineStatusVersion()).toStrictEqual(
            { 
                'Todo': 1, 
                'Done': 0, 
                'Cancel': 1, 
                'Summary': 2 
            }
        );
    });

    // Cancel Batch 복원 -> Summary: Cancel-1 -> Todo: Single 추가 -> Summary: Todo+1
    it('Cancel:BatchRevertData & Todo:BatchCreateData & Summary:loadData ', async() => {
        const result1 = await orchestrator.command('Cancel', 'batchRevertLoad', ['독후감작성', '오전반차']);
        expect(result1).toStrictEqual(['팀행사준비']);

        const result2 = await orchestrator.command('Todo', 'loadData', {});
        expect(result2).toStrictEqual(['팀업무', '개인업무', '타팀자료요청', '독후감작성', '오전반차']);

        const result3 = await orchestrator.command('Summary', 'loadData', {});
        expect(result3).toStrictEqual({
            Todo: 5,
            Cancel: 1,
            Done: 3,
        });

        expect(orchestrator.getPipelineStatusVersion()).toStrictEqual(
            { 
                'Todo': 1, 
                'Done': 0, 
                'Cancel': 1, 
                'Summary': 2 
            }
        );
    });

    // Done Single 삭제 -> Summary: Done-1
    it('Done:SingleDeleteData & Summary:loadData ', async() => {
        const result1 = await orchestrator.command('Done', 'singleDeleteLoad', '운영인수인계');
        expect(result1).toStrictEqual(['분기계획작성', '화상회의']);

        const result2 = await orchestrator.command('Summary', 'loadData', {});
        expect(result2).toStrictEqual({
            Todo: 3,
            Cancel: 3,
            Done: 2,
        });

        expect(orchestrator.getPipelineStatusVersion()).toStrictEqual(
            { 
                'Todo': 0, 
                'Done': 1, 
                'Cancel': 0, 
                'Summary': 1 
            }
        );
    });

    // Done Batch 삭제 -> Summary: Done-1
    it('Done:BatchDeleteData & Summary:loadData ', async() => {
        const result1 = await orchestrator.command('Done', 'batchDeleteLoad', ['운영인수인계', '화상회의']);
        expect(result1).toStrictEqual(['분기계획작성']);

        const result2 = await orchestrator.command('Summary', 'loadData', {});
        expect(result2).toStrictEqual({
            Todo: 3,
            Cancel: 3,
            Done: 1,
        });

        expect(orchestrator.getPipelineStatusVersion()).toStrictEqual(
            { 
                'Todo': 0, 
                'Done': 1, 
                'Cancel': 0, 
                'Summary': 1 
            }
        );
    });

    // Done Single 복원 -> Summary: Done-1 -> Todo: Single 추가 -> Summary: Todo+1
    it('Done:SingleRevertData & Todo:CreateData & Summary:loadData ', async() => {
        const result1 = await orchestrator.command('Done', 'singleRevertLoad', '분기계획작성');
        expect(result1).toStrictEqual(['운영인수인계', '화상회의']);

        const result2 = await orchestrator.command('Todo', 'loadData', {});
        expect(result2).toStrictEqual(['팀업무', '개인업무', '타팀자료요청', '분기계획작성']);

        const result3 = await orchestrator.command('Summary', 'loadData', {});
        expect(result3).toStrictEqual({
            Todo: 4,
            Cancel: 3,
            Done: 2,
        });

        expect(orchestrator.getPipelineStatusVersion()).toStrictEqual(
            { 
                'Todo': 1, 
                'Done': 1, 
                'Cancel': 0, 
                'Summary': 2 
            }
        );
    });

    // Done Batch 복원 -> Summary: Done-1 -> Todo: Batch 추가 -> Summary: Todo+1
    it('Done:SingleRevertData & Todo:CreateData & Summary:loadData ', async() => {
        const result1 = await orchestrator.command('Done', 'batchRevertLoad', ['분기계획작성',  '화상회의']);
        expect(result1).toStrictEqual(['운영인수인계']);

        const result2 = await orchestrator.command('Todo', 'loadData', {});
        expect(result2).toStrictEqual(['팀업무', '개인업무', '타팀자료요청', '분기계획작성', '화상회의']);

        const result3 = await orchestrator.command('Summary', 'loadData', {});
        expect(result3).toStrictEqual({
            Todo: 5,
            Cancel: 3,
            Done: 1,
        });

        expect(orchestrator.getPipelineStatusVersion()).toStrictEqual(
            { 
                'Todo': 1, 
                'Done': 1, 
                'Cancel': 0, 
                'Summary': 2 
            }
        );
    });
});