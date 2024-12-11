import { CancelDataPipelineConfig } from '@/logic/core/task/pipelines/cancel/config';

describe('CancelDataPipeline', () => {
    let cancelDataPipeline;

    beforeEach(async () => {
        cancelDataPipeline = CancelDataPipelineConfig();
        await cancelDataPipeline.command('loadData', {1:2});
    });

    it('loadData', async() => {
        const result = await cancelDataPipeline.command('loadData', {1:2});
        expect(result).toStrictEqual(['팀행사준비', '독후감작성', '오전반차']);
    });

    it('createLoad', async() => {
        const result = await cancelDataPipeline.command('createLoad', '커피챗');
        expect(result).toStrictEqual(['팀행사준비', '독후감작성', '오전반차', '커피챗']);
    });

    it('deleteLoad', async() => {
        const result = await cancelDataPipeline.command('deleteLoad', '팀행사준비');
        expect(result).toStrictEqual(['독후감작성', '오전반차']);
    });

    it('createLoad and deleteLoad', async() => {
        await cancelDataPipeline.command('createLoad', '커피챗');
        const result = await cancelDataPipeline.command('deleteLoad', '독후감작성');
        expect(result).toStrictEqual(['팀행사준비', '오전반차', '커피챗']);
    });
});