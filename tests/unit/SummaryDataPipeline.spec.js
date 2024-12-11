import { SummaryDataPipelineConfig } from '@/logic/core/task/pipelines/summary/config';

describe('SummaryDataPipeline', () => {
    let summaryDataPipeline;

    beforeEach(async () => {
        summaryDataPipeline = SummaryDataPipelineConfig();
        await summaryDataPipeline.command('loadData', {1:2});
    });

    it('loadData', async() => {
        const result = await summaryDataPipeline.command('loadData', {1:2});
        expect(result).toStrictEqual({
            Todo: 3,
            Cancle: 3,
            Done: 3,
        });
    });

    it('increaseLoad', async() => {
        const result = await summaryDataPipeline.command('increaseLoad', 'Todo');
        expect(result).toStrictEqual({
            Todo: 4,
            Cancle: 3,
            Done: 3,
        });
    });

    it('decreaseLoad', async() => {
        const result = await summaryDataPipeline.command('decreaseLoad', 'Cancle');
        expect(result).toStrictEqual({
            Todo: 3,
            Cancle: 2,
            Done: 3,
        });
    });

    it('increaseLoad and decreaseLoad', async() => {
        await summaryDataPipeline.command('increaseLoad', 'Todo');
        const result = await summaryDataPipeline.command('decreaseLoad', 'Done');
        expect(result).toStrictEqual({
            Todo: 4,
            Cancle: 3,
            Done: 2,
        });
    });
});