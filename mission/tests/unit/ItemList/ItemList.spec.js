import { mount } from '@vue/test-utils';
import ItemListPage from '@/views/Items/ItemList.vue';

describe('ItemListPage', () => {
  const wrapper = mount(ItemListPage);

  test('renders ItemListPage', () => {
    expect(wrapper.find('#item-list-page').exists()).toBe(true);
  });
});
