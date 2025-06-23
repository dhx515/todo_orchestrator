import { TodoDataPipelineConfig } from '@/logic/core/task/pipelines/todo/config';
import { resetTodoMock } from '@/logic/api/mock/todoWAS';

describe('TodoDataPipeline', () => {
    let todoDataPipeline;

    beforeEach(async () => {
        await resetTodoMock();
        todoDataPipeline = TodoDataPipelineConfig();
        await todoDataPipeline.command('loadData', {});
    });

    it('loadData', async() => {
        const result = await todoDataPipeline.command('loadData', {});
        expect(result).toStrictEqual(['팀업무', '개인업무', '타팀자료요청']);
    });

    it('singleCreateLoad', async() => {
        const result = await todoDataPipeline.command('singleCreateLoad', '커피챗');
        expect(result).toStrictEqual(['팀업무', '개인업무', '타팀자료요청', '커피챗']);
    });

    it('singleCreateData & singleDeleteLoad', async() => {
        await todoDataPipeline.command('singleCreateData', '커피챗');
        const result = await todoDataPipeline.command('singleDeleteLoad', '팀업무');
        expect(result).toStrictEqual(['개인업무', '타팀자료요청', '커피챗']);
    });

    it('singleCreateData & loadData', async() => {
        await todoDataPipeline.command('singleCreateData', '커피챗');
        const result = await todoDataPipeline.command('loadData', {});
        expect(result).toStrictEqual(['팀업무', '개인업무', '타팀자료요청', '커피챗']);
    });

    it('singleCancelLoad', async() => {
        const result = await todoDataPipeline.command('singleCancelLoad', '개인업무');
        expect(result).toStrictEqual(['팀업무', '타팀자료요청']);
    });

    it('singleDoneLoad', async() => {
        const result = await todoDataPipeline.command('singleDoneLoad', '타팀자료요청');
        expect(result).toStrictEqual(['팀업무', '개인업무']);
    });

    it('singleDeleteLoad', async() => {
        const result = await todoDataPipeline.command('singleDeleteLoad', '팀업무');
        expect(result).toStrictEqual(['개인업무', '타팀자료요청']);
    });

    it('singleDeleteData & loadData', async() => {
        await todoDataPipeline.command('singleDeleteData', '개인업무');
        const result = await todoDataPipeline.command('loadData', {});
        expect(result).toStrictEqual(['팀업무', '타팀자료요청']);
    });

    it('singleCreateData and singleCancelLoad', async() => {
        await todoDataPipeline.command('singleCreateData', '커피챗');
        const result = await todoDataPipeline.command('singleCancelLoad', '개인업무');
        expect(result).toStrictEqual(['팀업무', '타팀자료요청', '커피챗']);
    });

    it('singleCreateData and singleDoneLoad', async() => {
        await todoDataPipeline.command('singleCreateData', '커피챗');
        const result = await todoDataPipeline.command('singleDoneLoad', '개인업무');
        expect(result).toStrictEqual(['팀업무', '타팀자료요청', '커피챗']);
    });

    it('batchCreateLoad', async() => {
        const result = await todoDataPipeline.command('batchCreateLoad', ['업무1', '업무2']);
        expect(result).toStrictEqual(['팀업무', '개인업무', '타팀자료요청', '업무1', '업무2']);
    });

    it('batchCreateData & loadData', async() => {
        await todoDataPipeline.command('batchCreateData', ['업무3', '업무4']);
        const result = await todoDataPipeline.command('loadData', {});
        expect(result).toStrictEqual(['팀업무', '개인업무', '타팀자료요청', '업무3', '업무4']);
    });

    it('batchDeleteLoad', async() => {
        const result = await todoDataPipeline.command('batchDeleteLoad', ['팀업무', '개인업무']);
        expect(result).toStrictEqual(['타팀자료요청']);
    });

    it('batchCancelLoad', async() => {
        const result = await todoDataPipeline.command('batchCancelLoad', ['개인업무', '타팀자료요청']);
        expect(result).toStrictEqual(['팀업무']);
    });

    it('batchDoneLoad', async() => {
        const result = await todoDataPipeline.command('batchDoneLoad', ['팀업무', '타팀자료요청']);
        expect(result).toStrictEqual(['개인업무']);
    });

    it('batchDeleteData & loadData', async() => {
        await todoDataPipeline.command('batchDeleteData', ['개인업무', '타팀자료요청']);
        const result = await todoDataPipeline.command('loadData', {});
        expect(result).toStrictEqual(['팀업무']);
    });

    it('batchCreateData and batchCancelLoad', async() => {
        await todoDataPipeline.command('batchCreateData', ['커피챗', '회의']);
        const result = await todoDataPipeline.command('batchCancelLoad', ['개인업무', '타팀자료요청']);
        expect(result).toStrictEqual(['팀업무', '커피챗', '회의']);
    });
});