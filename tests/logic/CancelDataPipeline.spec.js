import { CancelDataPipelineConfig } from '@/logic/core/task/pipelines/cancel/config';

describe('CancelDataPipeline', () => {
    let cancelDataPipeline;

    beforeEach(async () => {
        cancelDataPipeline = CancelDataPipelineConfig();
        await cancelDataPipeline.command('loadData', {});
    });

    it('loadData', async() => {
        const result = await cancelDataPipeline.command('loadData', {});
        expect(result).toStrictEqual(['팀행사준비', '독후감작성', '오전반차']);
        expect(cancelDataPipeline.getStatusVersion()).toStrictEqual(0);
    });

    it('singleCreateLoad', async() => {
        const result = await cancelDataPipeline.command('singleCreateLoad', '커피챗');
        expect(result).toStrictEqual(['팀행사준비', '독후감작성', '오전반차', '커피챗']);
        expect(cancelDataPipeline.getStatusVersion()).toStrictEqual(1);
    });

    it('singleCreateData & singleDeleteLoad', async() => {
        await cancelDataPipeline.command('singleCreateData', '독후감작성');
        const result = await cancelDataPipeline.command('singleDeleteLoad', '독후감작성');
        expect(result).toStrictEqual(['팀행사준비', '오전반차', '독후감작성']);
        expect(cancelDataPipeline.getStatusVersion()).toStrictEqual(2);
    });

    it('singleCreateData & loadData', async() => {
        await cancelDataPipeline.command('singleCreateData', '커피챗');
        const result = await cancelDataPipeline.command('loadData', {});
        expect(result).toStrictEqual(['팀행사준비', '독후감작성', '오전반차', '커피챗']);
        expect(cancelDataPipeline.getStatusVersion()).toStrictEqual(1);
    });

    it('singleDeleteLoad', async() => {
        const result = await cancelDataPipeline.command('singleDeleteLoad', '팀행사준비');
        expect(result).toStrictEqual(['독후감작성', '오전반차']);
        expect(cancelDataPipeline.getStatusVersion()).toStrictEqual(1);
    });

    it('singleDeleteData & loadData', async() => {
        await cancelDataPipeline.command('singleDeleteData', '독후감작성');
        const result = await cancelDataPipeline.command('loadData', {});
        expect(result).toStrictEqual(['팀행사준비', '오전반차']);
        expect(cancelDataPipeline.getStatusVersion()).toStrictEqual(1);
    });

    it('singleRevertLoad', async() => {
        await cancelDataPipeline.command('singleCreateLoad', '커피챗');
        const result = await cancelDataPipeline.command('singleRevertLoad', '커피챗');
        expect(result).toStrictEqual(['팀행사준비', '독후감작성', '오전반차']);
        expect(cancelDataPipeline.getStatusVersion()).toStrictEqual(2);
    });

    it('batchCreateLoad', async() => {
        const result = await cancelDataPipeline.command('batchCreateLoad', ['업무1', '업무2']);
        expect(result).toStrictEqual(['팀행사준비', '독후감작성', '오전반차', '업무1', '업무2']);
        expect(cancelDataPipeline.getStatusVersion()).toStrictEqual(1);
    });

    it('batchCreateData & loadData', async() => {
        await cancelDataPipeline.command('batchCreateData', ['업무3', '업무4']);
        const result = await cancelDataPipeline.command('loadData', {});
        expect(result).toStrictEqual(['팀행사준비', '독후감작성', '오전반차', '업무3', '업무4']);
        expect(cancelDataPipeline.getStatusVersion()).toStrictEqual(1);
    });

    it('batchDeleteLoad', async() => {
        const result = await cancelDataPipeline.command('batchDeleteLoad', ['팀행사준비', '독후감작성']);
        expect(result).toStrictEqual(['오전반차']);
        expect(cancelDataPipeline.getStatusVersion()).toStrictEqual(1);
    });

    it('batchDeleteData & loadData', async() => {
        await cancelDataPipeline.command('batchDeleteData', ['독후감작성', '오전반차']);
        const result = await cancelDataPipeline.command('loadData', {});
        expect(result).toStrictEqual(['팀행사준비']);
        expect(cancelDataPipeline.getStatusVersion()).toStrictEqual(1);
    });

    it('batchRevertLoad', async() => {
        await cancelDataPipeline.command('batchCreateLoad', ['커피챗', '회의']);
        const result = await cancelDataPipeline.command('batchRevertLoad', ['커피챗', '회의']);
        expect(result).toStrictEqual(['팀행사준비', '독후감작성', '오전반차']);
        expect(cancelDataPipeline.getStatusVersion()).toStrictEqual(2);
    });

    it('singleRevertLoad and batchRevertLoad', async() => {
        await cancelDataPipeline.command('singleCreateLoad', '커피챗');
        await cancelDataPipeline.command('batchCreateLoad', ['회의', '업무1']);
        await cancelDataPipeline.command('singleRevertLoad', '커피챗');
        const result = await cancelDataPipeline.command('batchRevertLoad', ['회의', '업무1']);
        expect(result).toStrictEqual(['팀행사준비', '독후감작성', '오전반차']);
        expect(cancelDataPipeline.getStatusVersion()).toStrictEqual(4);
    });
});