import { SummaryDataPipelineConfig } from '@/logic/core/task/pipelines/summary/config';
import { resetTodoMock } from '@/logic/api/mock/todoWAS';
import { resetCancelMock } from '@/logic/api/mock/cancelWAS';
import { resetDoneMock } from '@/logic/api/mock/doneWAS';

describe('SummaryDataPipeline', () => {
    let summaryDataPipeline;

    beforeEach(async () => {
        await resetTodoMock();
        await resetCancelMock();
        await resetDoneMock();
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
    });
});