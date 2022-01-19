import { mount } from '@vue/test-utils';
import ItemInfoPage from '@/views/ItemList.vue';

describe('ItemListPage', () => {
  it('renders ItemListPage', () => {
    const wrapper = mount(ItemInfoPage);

    expect(wrapper.find('#item-list-page').exists()).toBe(true);
  });
});
