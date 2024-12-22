import { mount } from '@vue/test-utils';
import TodoContents from '@/components/SectionJobContents/TodoContents/TodoContents.vue';

describe('TodoContents.vue', () => {
    let wrapper;

    let loadDataMock, createLoadMock, cancelLoadMock, doneLoadMock;

    beforeEach(async () => {
        loadDataMock = jest.fn().mockResolvedValue(['Task 1', 'Task 2']);
        createLoadMock = jest.fn().mockResolvedValue(['Task 1', 'Task 2', 'Task 3']);
        cancelLoadMock = jest.fn().mockResolvedValue(['Task 1']);
        doneLoadMock = jest.fn().mockResolvedValue(['Task 2']);

        wrapper = mount(TodoContents, {
            props: {
                loadData: loadDataMock,
                createLoad: createLoadMock,
                cancelLoad: cancelLoadMock,
                doneLoad: doneLoadMock,
            },
        });

        await wrapper.vm.$nextTick(); // Vue 렌더링이 완료될 때까지 대기
    });

    it('renders todo items', async () => {
        expect(loadDataMock).toHaveBeenCalled();
        await wrapper.vm.$nextTick();
        const items = wrapper.findAll('.v-list-item-title');
        expect(items.length).toBe(2);
        expect(items[0].text()).toContain('Task 1');
        expect(items[1].text()).toContain('Task 2');
    });

    it('opens modal on button click', async () => {
        const button = wrapper.find('.v-btn');
        await button.trigger('click');
        expect(wrapper.vm.isModalOpen).toBe(true);
    });

    it('adds a new task', async () => {
        await wrapper.vm.addTask('Task 3');
        await wrapper.vm.$nextTick();
        const items = wrapper.findAll('.v-list-item-title');
        expect(items.length).toBe(3);
        expect(items[2].text()).toContain('Task 3');
    });

    it('cancels a task', async () => {
        await wrapper.vm.cancelTask('Task 2');
        await wrapper.vm.$nextTick();
        const items = wrapper.findAll('.v-list-item-title');
        expect(items.length).toBe(1);
        expect(items[0].text()).toContain('Task 1');
    });

    it('deletes a task', async () => {
        await wrapper.vm.deleteTask('Task 1');
        await wrapper.vm.$nextTick();
        const items = wrapper.findAll('.v-list-item-title');
        expect(items.length).toBe(1);
        expect(items[0].text()).toContain('Task 2');
    });
});