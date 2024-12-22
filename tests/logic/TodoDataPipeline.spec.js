import { TodoDataPipelineConfig } from '@/logic/core/task/pipelines/todo/config';

describe('TodoDataPipeline', () => {
    let todoDataPipeline;

    beforeEach(async () => {
        todoDataPipeline = TodoDataPipelineConfig();
        await todoDataPipeline.command('loadData', {1:2});
    });

    it('loadData', async() => {
        const result = await todoDataPipeline.command('loadData', {1:2});
        expect(result).toStrictEqual(['팀업무', '개인업무', '타팀자료요청']);
    });

    it('createLoad', async() => {
        const result = await todoDataPipeline.command('createLoad', '커피챗');
        expect(result).toStrictEqual(['팀업무', '개인업무', '타팀자료요청', '커피챗']);
    });

    it('cancelLoad', async() => {
        const result = await todoDataPipeline.command('cancelLoad', '개인업무');
        expect(result).toStrictEqual(['팀업무', '타팀자료요청']);
    });

    it('doneLoad', async() => {
        const result = await todoDataPipeline.command('doneLoad', '개인업무');
        expect(result).toStrictEqual(['팀업무', '타팀자료요청']);
    });

    it('createLoad and cancelLoad', async() => {
        await todoDataPipeline.command('createLoad', '커피챗');
        const result = await todoDataPipeline.command('cancelLoad', '개인업무');
        expect(result).toStrictEqual(['팀업무', '타팀자료요청', '커피챗']);
    });

    it('createLoad and doneLoad', async() => {
        await todoDataPipeline.command('createLoad', '커피챗');
        const result = await todoDataPipeline.command('doneLoad', '개인업무');
        expect(result).toStrictEqual(['팀업무', '타팀자료요청', '커피챗']);
    });
});