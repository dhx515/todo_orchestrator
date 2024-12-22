import { mount } from '@vue/test-utils';
import CanceledContents from '@/components/SectionJobContents/CanceledContents.vue';

describe('CanceledContents.vue', () => {
    let wrapper;

    let loadDataMock, deleteLoadMock;

    beforeEach(async () => {
        loadDataMock = jest.fn().mockResolvedValue(['Task 1', 'Task 2']);
        deleteLoadMock = jest.fn().mockResolvedValue();

        wrapper = mount(CanceledContents, {
            props: {
                loadData: loadDataMock,
                deleteLoad: deleteLoadMock,
            },
        });

        await wrapper.vm.$nextTick(); // Vue 렌더링이 완료될 때까지 대기
    });

    it('renders canceled items', async () => {
        expect(loadDataMock).toHaveBeenCalled();
        await wrapper.vm.$nextTick();
        const items = wrapper.findAll('.v-list-item-title');
        expect(items.length).toBe(2);
        expect(items[0].text()).toContain('Task 1');
        expect(items[1].text()).toContain('Task 2');
    });

    it('deletes a task', async () => {
        // wrapper.find('.v-btn')는 첫 번째 삭제 버튼을 찾음
        const button = wrapper.find('.v-btn');
        await button.trigger('click');
        expect(deleteLoadMock).toHaveBeenCalledWith('Task 1');
    });
});
