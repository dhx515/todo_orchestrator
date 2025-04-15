import { mount } from '@vue/test-utils';
import SectionSummary from '@/components/SectionSummary.vue';
import { nextTick } from 'vue';

describe('SectionSummary.vue', () => {
    let wrapper;
    let loadDataMock;
    let updateComponentKeyMock;

    beforeEach(async () => {

        loadDataMock = jest.fn().mockResolvedValue({
            Todo: 5,
            Done: 3,
            Cancel: 2,
        });

        updateComponentKeyMock = jest.fn();

        wrapper = mount(SectionSummary, {
            global: {
                provide: {
                    orchestrator: {
                        command: loadDataMock,
                    },
                    updateComponentKey: updateComponentKeyMock,
                },
            },
        });

        await nextTick(); // Wait for onMounted and rendering
    });

    it('calls orchestrator.command and updateComponentKey', () => {
        expect(loadDataMock).toHaveBeenCalledWith('Summary', 'loadData', {});
        expect(updateComponentKeyMock).toHaveBeenCalled();
    });

    it('renders task summary values correctly', () => {
        const allParagraphs = wrapper.findAll('p');
        expect(allParagraphs[0].text()).toBe('5'); // Todo
        expect(allParagraphs[1].text()).toBe('3'); // Done
        expect(allParagraphs[2].text()).toBe('2'); // Cancel
    });
});