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
        deleteLoadMock = jest.fn().mockResolvedValue(['Task 2']);

        wrapper = mount(TodoContents, {
            props: {
                loadData: loadDataMock,
                createLoad: createLoadMock,
                deleteLoad: deleteLoadMock,
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

    it('create a new todo', async () => {
        await wrapper.vm.createTodo('Task 3');
        await wrapper.vm.$nextTick();
        const items = wrapper.findAll('.v-list-item-title');
        expect(items.length).toBe(3);
        expect(items[2].text()).toContain('Task 3');
    });

    it('delete a todo', async () => {
        await wrapper.vm.deleteTodo('Task 1');
        await wrapper.vm.$nextTick();
        const items = wrapper.findAll('.v-list-item-title');
        expect(items.length).toBe(1);
        expect(items[0].text()).toContain('Task 2');
    });

    it('cancels a todo', async () => {
        await wrapper.vm.cancelTodo('Task 2');
        await wrapper.vm.$nextTick();
        const items = wrapper.findAll('.v-list-item-title');
        expect(items.length).toBe(1);
        expect(items[0].text()).toContain('Task 1');
    });

    it('done a todo', async () => {
        await wrapper.vm.deleteTodo('Task 1');
        await wrapper.vm.$nextTick();
        const items = wrapper.findAll('.v-list-item-title');
        expect(items.length).toBe(1);
        expect(items[0].text()).toContain('Task 2');
    });
});