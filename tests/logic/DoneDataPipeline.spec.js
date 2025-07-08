import { DoneDataPipelineConfig } from '@/logic/core/task/pipelines/done/config';
import { resetDoneMock } from '@/logic/api/mock/doneWAS';
import { ref } from 'vue';

describe('DoneDataPipeline', () => {
    let doneDataPipeline;
    let doneState = ref([]);

    beforeEach(async () => {
        await resetDoneMock();
        doneState.value = [];
        doneDataPipeline = DoneDataPipelineConfig(doneState);
        await doneDataPipeline.command('loadData', {});
    });

    it('loadData', async() => {
        await doneDataPipeline.command('loadData', {});
        expect(doneState.value).toStrictEqual(['분기계획작성', '운영인수인계', '화상회의']);
    });

    it('singleCreate', async() => {
        await doneDataPipeline.command('singleCreate', '커피챗');
        expect(doneState.value).toStrictEqual(['분기계획작성', '운영인수인계', '화상회의', '커피챗']);
    });

    it('singleCreate & singleDelete', async() => {
        await doneDataPipeline.command('singleCreate', '화상회의');
        await doneDataPipeline.command('singleDelete', '화상회의');
        expect(doneState.value).toStrictEqual(['분기계획작성', '운영인수인계', '화상회의']);
    });

    it('singleCreate', async() => {
        await doneDataPipeline.command('singleCreate', '커피챗');
        expect(doneState.value).toStrictEqual(['분기계획작성', '운영인수인계', '화상회의', '커피챗']);
    });

    it('singleDelete', async() => {
        await doneDataPipeline.command('singleDelete', '분기계획작성');
        expect(doneState.value).toStrictEqual(['운영인수인계', '화상회의']);
    });

    it('singleDelete', async() => {
        await doneDataPipeline.command('singleDelete', '운영인수인계');
        expect(doneState.value).toStrictEqual(['분기계획작성', '화상회의']);
    });

    it('singleRevert', async() => {
        await doneDataPipeline.command('singleCreate', '커피챗');
        await doneDataPipeline.command('singleRevert', '커피챗');
        expect(doneState.value).toStrictEqual(['분기계획작성', '운영인수인계', '화상회의']);
    });

    it('batchCreate', async() => {
        await doneDataPipeline.command('batchCreate', ['업무1', '업무2']);
        expect(doneState.value).toStrictEqual(['분기계획작성', '운영인수인계', '화상회의', '업무1', '업무2']);
    });

    it('batchCreate', async() => {
        await doneDataPipeline.command('batchCreate', ['업무3', '업무4']);
        expect(doneState.value).toStrictEqual(['분기계획작성', '운영인수인계', '화상회의', '업무3', '업무4']);
    });

    it('batchDelete', async() => {
        await doneDataPipeline.command('batchDelete', ['분기계획작성', '운영인수인계']);
        expect(doneState.value).toStrictEqual(['화상회의']);
    });

    it('batchDelete', async() => {
        await doneDataPipeline.command('batchDelete', ['운영인수인계', '화상회의']);
        expect(doneState.value).toStrictEqual(['분기계획작성']);
    });

    it('batchRever', async() => {
        await doneDataPipeline.command('batchCreate', ['커피챗', '회의']);
        await doneDataPipeline.command('batchRevert', ['커피챗', '회의']);
        expect(doneState.value).toStrictEqual(['분기계획작성', '운영인수인계', '화상회의']);
    });

    it('singleRevert and batchRevert', async() => {
        await doneDataPipeline.command('singleCreate', '커피챗');
        await doneDataPipeline.command('batchCreate', ['회의', '업무1']);
        await doneDataPipeline.command('singleRevert', '커피챗');
        await doneDataPipeline.command('batchRevert', ['회의', '업무1']);
        expect(doneState.value).toStrictEqual(['분기계획작성', '운영인수인계', '화상회의']);
    });
});