import { SummaryDataPipelineConfig } from '@/logic/core/task/pipelines/summary/config';
import { resetTodoMock } from '@/logic/api/mock/todoWAS';
import { resetCancelMock } from '@/logic/api/mock/cancelWAS';
import { resetDoneMock } from '@/logic/api/mock/doneWAS';
import { ref } from 'vue';

describe('SummaryDataPipeline', () => {
    let summaryDataPipeline;
    let summaryState = ref({});

    beforeEach(async () => {
        await resetTodoMock();
        await resetCancelMock();
        await resetDoneMock();
        summaryState.value = {};
        summaryDataPipeline = SummaryDataPipelineConfig(summaryState);
        await summaryDataPipeline.command('loadData', {});
    });

    it('loadData', async() => {
        const result = await summaryDataPipeline.command('loadData', {});
        expect(summaryState.value).toStrictEqual({
            Todo: 3,
            Cancel: 3,
            Done: 3,
        });
    });
});