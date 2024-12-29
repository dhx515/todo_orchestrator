import { mount } from '@vue/test-utils';
import DoneContents from '@/components/SectionJobContents/DoneContents.vue';

describe('DoneContents.vue', () => {
    let wrapper;

    let loadDataMock, deleteLoadMock, revertLoadMock;

    beforeEach(async () => {
        loadDataMock = jest.fn().mockResolvedValue(['Task 1', 'Task 2']);
        deleteLoadMock = jest.fn().mockResolvedValue();
        revertLoadMock = jest.fn().mockResolvedValue();

        wrapper = mount(DoneContents, {
            props: {
                loadData: loadDataMock,
                deleteLoad: deleteLoadMock,
                revertLoad: revertLoadMock,
            },
        });

        await wrapper.vm.$nextTick(); // Vue 렌더링이 완료될 때까지 대기
    });

    it('renders done items', async () => {
        expect(loadDataMock).toHaveBeenCalled();
        await wrapper.vm.$nextTick();
        const items = wrapper.findAll('.v-list-item-title');
        expect(items.length).toBe(2);
        expect(items[0].text()).toContain('Task 1');
        expect(items[1].text()).toContain('Task 2');
    });

    it('reverts a task', async () => {
        // 첫 번째 revert 버튼을 찾음
        const button = wrapper.findAll('.v-btn').at(0);
        await button.trigger('click');
        expect(revertLoadMock).toHaveBeenCalledWith('Task 1');
    });

    it('deletes a task', async () => {
        // wrapper.find('.v-btn')는 첫 번째 삭제 버튼을 찾음
        const button = wrapper.findAll('.v-btn').at(1);
        await button.trigger('click');
        expect(deleteLoadMock).toHaveBeenCalledWith('Task 1');
    });
});
