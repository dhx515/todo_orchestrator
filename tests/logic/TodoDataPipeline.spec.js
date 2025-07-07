import { TodoDataPipelineConfig } from '@/logic/core/task/pipelines/todo/config';
import { resetTodoMock } from '@/logic/api/mock/todoWAS';
import { ref } from 'vue';

describe('TodoDataPipeline', () => {
    let todoDataPipeline;
    let todoState = ref({});

    beforeEach(async () => {
        await resetTodoMock();
        todoState.value = {};
        todoDataPipeline = TodoDataPipelineConfig(todoState);
        await todoDataPipeline.command('loadData', {});
    });

    it('loadData', async() => {
        await todoDataPipeline.command('loadData', {});
        expect(todoState.value).toStrictEqual(['팀업무', '개인업무', '타팀자료요청']);
    });

    it('singleCreate', async() => {
        await todoDataPipeline.command('singleCreate', '커피챗');
        expect(todoState.value).toStrictEqual(['팀업무', '개인업무', '타팀자료요청', '커피챗']);
    });

    it('singleCreate & singleDelete', async() => {
        await todoDataPipeline.command('singleCreate', '커피챗');
        await todoDataPipeline.command('singleDelete', '팀업무');
        expect(todoState.value).toStrictEqual(['개인업무', '타팀자료요청', '커피챗']);
    });

    it('singleCreate & loadData', async() => {
        await todoDataPipeline.command('singleCreate', '커피챗');
        await todoDataPipeline.command('loadData', {});
        expect(todoState.value).toStrictEqual(['팀업무', '개인업무', '타팀자료요청', '커피챗']);
    });

    it('singleCancel', async() => {
        await todoDataPipeline.command('singleCancel', '개인업무');
        expect(todoState.value).toStrictEqual(['팀업무', '타팀자료요청']);
    });

    it('singleDone', async() => {
        await todoDataPipeline.command('singleDone', '타팀자료요청');
        expect(todoState.value).toStrictEqual(['팀업무', '개인업무']);
    });

    it('singleDelete', async() => {
        await todoDataPipeline.command('singleDelete', '팀업무');
        expect(todoState.value).toStrictEqual(['개인업무', '타팀자료요청']);
    });

    it('singleDelete & loadData', async() => {
        await todoDataPipeline.command('singleDelete', '개인업무');
        await todoDataPipeline.command('loadData', {});
        expect(todoState.value).toStrictEqual(['팀업무', '타팀자료요청']);
    });

    it('singleCreate and singleCancel', async() => {
        await todoDataPipeline.command('singleCreate', '커피챗');
        await todoDataPipeline.command('singleCancel', '개인업무');
        expect(todoState.value).toStrictEqual(['팀업무', '타팀자료요청', '커피챗']);
    });

    it('singleCreate and singleDone', async() => {
        await todoDataPipeline.command('singleCreate', '커피챗');
        await todoDataPipeline.command('singleDone', '개인업무');
        expect(todoState.value).toStrictEqual(['팀업무', '타팀자료요청', '커피챗']);
    });

    it('batchCreate', async() => {
        await todoDataPipeline.command('batchCreate', ['업무1', '업무2']);
        expect(todoState.value).toStrictEqual(['팀업무', '개인업무', '타팀자료요청', '업무1', '업무2']);
    });

    it('batchCreate & loadData', async() => {
        await todoDataPipeline.command('batchCreate', ['업무3', '업무4']);
        await todoDataPipeline.command('loadData', {});
        expect(todoState.value).toStrictEqual(['팀업무', '개인업무', '타팀자료요청', '업무3', '업무4']);
    });

    it('batchDelete', async() => {
        await todoDataPipeline.command('batchDelete', ['팀업무', '개인업무']);
        expect(todoState.value).toStrictEqual(['타팀자료요청']);
    });

    it('batchCancel', async() => {
        await todoDataPipeline.command('batchCancel', ['개인업무', '타팀자료요청']);
        expect(todoState.value).toStrictEqual(['팀업무']);
    });

    it('batchDone', async() => {
        await todoDataPipeline.command('batchDone', ['팀업무', '타팀자료요청']);
        expect(todoState.value).toStrictEqual(['개인업무']);
    });

    it('batchDelete & loadData', async() => {
        await todoDataPipeline.command('batchDelete', ['개인업무', '타팀자료요청']);
        await todoDataPipeline.command('loadData', {});
        expect(todoState.value).toStrictEqual(['팀업무']);
    });

    it('batchCreates and batchCancel', async() => {
        await todoDataPipeline.command('batchCreate', ['커피챗', '회의']);
        await todoDataPipeline.command('batchCancel', ['개인업무', '타팀자료요청']);
        expect(todoState.value).toStrictEqual(['팀업무', '커피챗', '회의']);
    });
});