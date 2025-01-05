import { DoneDataPipelineConfig } from '@/logic/core/task/pipelines/done/config';

describe('DoneDataPipeline', () => {
    let doneDataPipeline;

    beforeEach(async () => {
        doneDataPipeline = DoneDataPipelineConfig();
        await doneDataPipeline.command('loadData', {});
    });

    it('loadData', async() => {
        const result = await doneDataPipeline.command('loadData', {});
        expect(result).toStrictEqual(['분기계획작성', '운영인수인계', '화상회의']);
    });

    it('singleCreateLoad', async() => {
        const result = await doneDataPipeline.command('singleCreateLoad', '커피챗');
        expect(result).toStrictEqual(['분기계획작성', '운영인수인계', '화상회의', '커피챗']);
    });

    it('singleCreateData & loadData', async() => {
        await doneDataPipeline.command('singleCreateData', '커피챗');
        const result = await doneDataPipeline.command('loadData', {});
        expect(result).toStrictEqual(['분기계획작성', '운영인수인계', '화상회의', '커피챗']);
    });

    it('singleCancelLoad', async() => {
        const result = await doneDataPipeline.command('singleCancelLoad', '운영인수인계');
        expect(result).toStrictEqual(['분기계획작성', '화상회의']);
    });

    it('singleDoneLoad', async() => {
        const result = await doneDataPipeline.command('singleDoneLoad', '화상회의');
        expect(result).toStrictEqual(['분기계획작성', '운영인수인계']);
    });

    it('singleDeleteLoad', async() => {
        const result = await doneDataPipeline.command('singleDeleteLoad', '분기계획작성');
        expect(result).toStrictEqual(['운영인수인계', '화상회의']);
    });

    it('singleDeleteData & loadData', async() => {
        await doneDataPipeline.command('singleDeleteData', '운영인수인계');
        const result = await doneDataPipeline.command('loadData', {});
        expect(result).toStrictEqual(['분기계획작성', '화상회의']);
    });

    it('singleCreateData and singleCancelLoad', async() => {
        await doneDataPipeline.command('singleCreateData', '커피챗');
        const result = await doneDataPipeline.command('singleCancelLoad', '운영인수인계');
        expect(result).toStrictEqual(['분기계획작성', '화상회의', '커피챗']);
    });

    it('singleCreateData and singleDoneLoad', async() => {
        await doneDataPipeline.command('singleCreateData', '커피챗');
        const result = await doneDataPipeline.command('singleDoneLoad', '운영인수인계');
        expect(result).toStrictEqual(['분기계획작성', '화상회의', '커피챗']);
    });

    it('batchCreateLoad', async() => {
        const result = await doneDataPipeline.command('batchCreateLoad', ['업무1', '업무2']);
        expect(result).toStrictEqual(['분기계획작성', '운영인수인계', '화상회의', '업무1', '업무2']);
    });

    it('batchCreateData & loadData', async() => {
        await doneDataPipeline.command('batchCreateData', ['업무3', '업무4']);
        const result = await doneDataPipeline.command('loadData', {});
        expect(result).toStrictEqual(['분기계획작성', '운영인수인계', '화상회의', '업무3', '업무4']);
    });

    it('batchDeleteLoad', async() => {
        const result = await doneDataPipeline.command('batchDeleteLoad', ['분기계획작성', '운영인수인계']);
        expect(result).toStrictEqual(['화상회의']);
    });

    it('batchCancelLoad', async() => {
        const result = await doneDataPipeline.command('batchCancelLoad', ['운영인수인계', '화상회의']);
        expect(result).toStrictEqual(['분기계획작성']);
    });

    it('batchDoneLoad', async() => {
        const result = await doneDataPipeline.command('batchDoneLoad', ['분기계획작성', '화상회의']);
        expect(result).toStrictEqual(['운영인수인계']);
    });

    it('batchDeleteData & loadData', async() => {
        await doneDataPipeline.command('batchDeleteData', ['운영인수인계', '화상회의']);
        const result = await doneDataPipeline.command('loadData', {});
        expect(result).toStrictEqual(['분기계획작성']);
    });

    it('batchCreateData and batchCancelLoad', async() => {
        await doneDataPipeline.command('batchCreateData', ['커피챗', '회의']);
        const result = await doneDataPipeline.command('batchCancelLoad', ['운영인수인계', '화상회의']);
        expect(result).toStrictEqual(['분기계획작성', '커피챗', '회의']);
    });

    it('singleCreateData and batchCancelLoad', async() => {
        await doneDataPipeline.command('singleCreateData', '커피챗');
        const result = await doneDataPipeline.command('batchCancelLoad', ['운영인수인계', '화상회의']);
        expect(result).toStrictEqual(['분기계획작성', '커피챗']);
    });

    it('batchCreateData and singleDoneLoad', async() => {
        await doneDataPipeline.command('batchCreateData', ['커피챗', '회의']);
        const result = await doneDataPipeline.command('singleDoneLoad', '운영인수인계');
        expect(result).toStrictEqual(['분기계획작성', '화상회의', '커피챗', '회의']);
    });

    it('singleCreateData and batchDoneLoad', async() => {
        await doneDataPipeline.command('singleCreateData', '커피챗');
        const result = await doneDataPipeline.command('batchDoneLoad', ['운영인수인계', '화상회의']);
        expect(result).toStrictEqual(['분기계획작성', '커피챗']);
    });
});