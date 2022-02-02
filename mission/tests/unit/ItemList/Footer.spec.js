import { mount } from '@vue/test-utils';
import Footer from '@/components/ItemList/Footer.vue';

describe('FooterItem', () => {
  const wrapper = mount(Footer);

  test('renders Footer', () => {
    expect(wrapper.find('.item-list-footer').exists()).toBe(true);
  });

  test('renders Footer Icons', () => {
    expect(wrapper.find('[data-test="homeIcon"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="likeIcon"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="cartIcon"]').exists()).toBe(true);
  });
});
