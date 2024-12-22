import { mount } from '@vue/test-utils';
import SectionSummary from '@/components/SectionSummary.vue';

describe('SectionSummary.vue', () => {
    let wrapper;

    let loadDataMock;

    beforeEach(async () => {
        loadDataMock = jest.fn().mockResolvedValue({
            Todo: 5,
            Done: 3,
            Cancel: 2,
        });

        wrapper = mount(SectionSummary, {
            props: {
                loadData: loadDataMock,
            },
        });

        await wrapper.vm.$nextTick(); // Vue 렌더링이 완료될 때까지 대기
    });

    it('renders summary items', async () => {
        expect(loadDataMock).toHaveBeenCalled();
        await wrapper.vm.$nextTick();
        expect(wrapper.find('h2').text()).toContain('Todo');
        expect(wrapper.findAll('p')[0].text()).toContain('5');
        expect(wrapper.findAll('p')[1].text()).toContain('3');
        expect(wrapper.findAll('p')[2].text()).toContain('2');
    });
});
