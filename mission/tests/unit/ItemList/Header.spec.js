import { mount } from '@vue/test-utils';
import Header from '@/components/ItemList/Header.vue';

describe('HeaderItem', () => {
  const wrapper = mount(Header);

  test('renders Header', () => {
    expect(wrapper.find('.item-list-header').exists()).toBe(true);
  });

  test('renders Header Title', () => {
    expect(wrapper.find('[data-test="headerTitle"]').text()).toEqual('MS MALL');
  })
});
