import { SummaryDataPipelineConfig } from '@/logic/core/task/pipelines/summary/config';

describe('SummaryDataPipeline', () => {
    let summaryDataPipeline;

    beforeEach(async () => {
        summaryDataPipeline = SummaryDataPipelineConfig();
        await summaryDataPipeline.command('loadData', {});
    });

    it('loadData', async() => {
        const result = await summaryDataPipeline.command('loadData', {});
        expect(result).toStrictEqual({
            Todo: 3,
            Cancel: 3,
            Done: 3,
        });
        expect(summaryDataPipeline.getStatusVersion()).toStrictEqual(0);
    });

    it('increaseData & loadData', async() => {
        await summaryDataPipeline.command('increaseData', 'Todo');
        const result = await summaryDataPipeline.command('loadData', {});
        expect(result).toStrictEqual({
            Todo: 4,
            Cancel: 3,
            Done: 3,
        });
        expect(summaryDataPipeline.getStatusVersion()).toStrictEqual(1);
    });

    it('increaseData 3 & loadData', async() => {
        await summaryDataPipeline.command('increaseData', 'Todo', 3);
        const result = await summaryDataPipeline.command('loadData', {});
        expect(result).toStrictEqual({
            Todo: 6,
            Cancel: 3,
            Done: 3,
        });
        expect(summaryDataPipeline.getStatusVersion()).toStrictEqual(1);
    });

    it('decreaseData & loadData', async() => {
        await summaryDataPipeline.command('decreaseData', 'Cancel');
        const result = await summaryDataPipeline.command('loadData', {});
        expect(result).toStrictEqual({
            Todo: 3,
            Cancel: 2,
            Done: 3,
        });
        expect(summaryDataPipeline.getStatusVersion()).toStrictEqual(1);
    });

    it('decreaseData 2 & loadData', async() => {
        await summaryDataPipeline.command('decreaseData', 'Cancel', 2);
        const result = await summaryDataPipeline.command('loadData', {});
        expect(result).toStrictEqual({
            Todo: 3,
            Cancel: 1,
            Done: 3,
        });
        expect(summaryDataPipeline.getStatusVersion()).toStrictEqual(1);
    });

    it('increaseData 2 & decreaseData 3 & loadData', async() => {
        await summaryDataPipeline.command('increaseData', 'Todo', 2);
        await summaryDataPipeline.command('decreaseData', 'Done', 3);
        const result = await summaryDataPipeline.command('loadData', {});
        expect(result).toStrictEqual({
            Todo: 5,
            Cancel: 3,
            Done: 0,
        });
        expect(summaryDataPipeline.getStatusVersion()).toStrictEqual(2);
    });

    it('decreaseData 2 & increaseData 3 & loadData', async() => {
        await summaryDataPipeline.command('decreaseData', 'Cancel', 2);
        await summaryDataPipeline.command('increaseData', 'Todo', 3);
        const result = await summaryDataPipeline.command('loadData', {});
        expect(result).toStrictEqual({
            Todo: 6,
            Cancel: 1,
            Done: 3,
        });
        expect(summaryDataPipeline.getStatusVersion()).toStrictEqual(2);
    });
});