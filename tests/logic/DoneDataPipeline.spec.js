import { DoneDataPipelineConfig } from '@/logic/core/task/pipelines/done/config';

describe('DoneDataPipeline', () => {
    let doneDataPipeline;

    beforeEach(async () => {
        doneDataPipeline = DoneDataPipelineConfig();
        await doneDataPipeline.command('loadData', {1:2});
    });

    it('loadData', async() => {
        const result = await doneDataPipeline.command('loadData', {1:2});
        expect(result).toStrictEqual(['분기계획작성', '운영인수인계', '화상회의']);
    });

    it('createLoad', async() => {
        const result = await doneDataPipeline.command('createLoad', '커피챗');
        expect(result).toStrictEqual(['분기계획작성', '운영인수인계', '화상회의', '커피챗']);
    });

    it('deleteLoad', async() => {
        const result = await doneDataPipeline.command('deleteLoad', '분기계획작성');
        expect(result).toStrictEqual(['운영인수인계', '화상회의']);
    });

    it('revertLoad', async() => {
        const result = await doneDataPipeline.command('revertLoad', '운영인수인계');
        expect(result).toStrictEqual(['분기계획작성', '화상회의']);
    });

    it('createData and deleteLoad', async() => {
        await doneDataPipeline.command('createData', '커피챗');
        const result = await doneDataPipeline.command('deleteLoad', '운영인수인계');
        expect(result).toStrictEqual(['분기계획작성', '화상회의', '커피챗']);
    });

    it('deleteData and createLoad', async() => {
        await doneDataPipeline.command('deleteData', '분기계획작성');
        const result = await doneDataPipeline.command('createLoad', '커피챗');
        expect(result).toStrictEqual(['운영인수인계', '화상회의', '커피챗']);
    });
});