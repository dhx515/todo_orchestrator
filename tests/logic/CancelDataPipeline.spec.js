import { CancelDataPipelineConfig } from '@/logic/core/task/pipelines/cancel/config';
import { resetCancelMock } from '@/logic/api/mock/cancelWAS';
import { ref } from 'vue';

describe('CancelDataPipeline', () => {
    let cancelDataPipeline;
    let cancelState = ref([]);

    beforeEach(async () => {
        resetCancelMock();
        cancelState.value = [];
        cancelDataPipeline = CancelDataPipelineConfig(cancelState);
        await cancelDataPipeline.command('loadData', {});
    });

    it('loadData', async() => {
        await cancelDataPipeline.command('loadData', {});
        expect(cancelState.value).toStrictEqual(['팀행사준비', '독후감작성', '오전반차']);
    });

    it('singleCreate', async() => {
        await cancelDataPipeline.command('singleCreate', '커피챗');
        expect(cancelState.value).toStrictEqual(['팀행사준비', '독후감작성', '오전반차', '커피챗']);
    });

    it('singleCreate & singleDelete', async() => {
        await cancelDataPipeline.command('singleCreate', '독후감작성');
        await cancelDataPipeline.command('singleDelete', '독후감작성');
        expect(cancelState.value).toStrictEqual(['팀행사준비', '오전반차', '독후감작성']);
    });

    it('singleDelete', async() => {
        await cancelDataPipeline.command('singleDelete', '팀행사준비');
        expect(cancelState.value).toStrictEqual(['독후감작성', '오전반차']);
    });

    it('singleCreate & singleRevert', async() => {
        await cancelDataPipeline.command('singleCreate', '커피챗');
        await cancelDataPipeline.command('singleRevert', '커피챗');
        expect(cancelState.value).toStrictEqual(['팀행사준비', '독후감작성', '오전반차']);
    });

    it('batchCreate', async() => {
        await cancelDataPipeline.command('batchCreate', ['업무1', '업무2']);
        expect(cancelState.value).toStrictEqual(['팀행사준비', '독후감작성', '오전반차', '업무1', '업무2']);
    });

    it('batchCreate', async() => {
        await cancelDataPipeline.command('batchCreate', ['업무3', '업무4']);
        expect(cancelState.value).toStrictEqual(['팀행사준비', '독후감작성', '오전반차', '업무3', '업무4']);
    });

    it('batchDelete', async() => {
        await cancelDataPipeline.command('batchDelete', ['팀행사준비', '독후감작성']);
        expect(cancelState.value).toStrictEqual(['오전반차']);
    });

    it('batchDelete & loadData', async() => {
        await cancelDataPipeline.command('batchDelete', ['독후감작성', '오전반차']);
        expect(cancelState.value).toStrictEqual(['팀행사준비']);
    });

    it('batchCreate & batchRevert', async() => {
        await cancelDataPipeline.command('batchCreate', ['커피챗', '회의']);
        await cancelDataPipeline.command('batchRevert', ['팀행사준비', '회의']);
        expect(cancelState.value).toStrictEqual(['독후감작성', '오전반차', '커피챗']);
    });

    it('singleRevert and batchRevert', async() => {
        await cancelDataPipeline.command('singleCreate', '커피챗');
        await cancelDataPipeline.command('batchCreate', ['회의', '업무1']);
        await cancelDataPipeline.command('singleRevert', '커피챗');
        await cancelDataPipeline.command('batchRevert', ['회의', '업무1']);
        expect(cancelState.value).toStrictEqual(['팀행사준비', '독후감작성', '오전반차']);
    });
});