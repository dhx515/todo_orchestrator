import { mount } from '@vue/test-utils';
import TaskContents from '@/components/SectionJobContents/TaskContents/TaskContents.vue';

describe('TaskContents.vue', () => {
    let wrapper;

    let domainMock, colorMock, loadDataMock, createLoadMock, deleteLoadMock, revertLoadMock;

    beforeEach(async () => {
        domainMock = 'test-domain';
        colorMock = 'green';
        loadDataMock = jest.fn().mockResolvedValue(['Task 1', 'Task 2']);
        createLoadMock = jest.fn().mockResolvedValue(['Task 1', 'Task 2']);
        deleteLoadMock = jest.fn().mockResolvedValue(['Task 1', 'Task 2']);
        revertLoadMock = jest.fn().mockResolvedValue(['Task 1', 'Task 2']);

        wrapper = mount(TaskContents, {
            props: {
                domain: domainMock,
                color: colorMock,
                loadData: loadDataMock,
                createLoad: createLoadMock,
                deleteLoad: deleteLoadMock,
                revertLoad: revertLoadMock,
            },
        });

        await wrapper.vm.$nextTick(); // Vue 렌더링이 완료될 때까지 대기
    });

    it('renders the domain title correctly', () => {
        const cardTitle = wrapper.find('.v-card-title');
        expect(cardTitle.text()).toContain('test-domain');
    });

    it('calls loadData on mount and updates taskItems', async () => {
        expect(loadDataMock).toHaveBeenCalled();
        await wrapper.vm.$nextTick();
        const listItems = wrapper.findAll('.v-list-item-title');
        expect(listItems).toHaveLength(2);
        expect(listItems[0].text()).toContain('Task 1');
        expect(listItems[1].text()).toContain('Task 2');
    });

    it('opens modal when plus button is clicked', async () => {
        const plusButton = wrapper.find('.mdi-plus'); // The button with 'mdi-plus'
        await plusButton.trigger('click');
        expect(wrapper.vm.isModalOpen).toBe(true);
    });
});