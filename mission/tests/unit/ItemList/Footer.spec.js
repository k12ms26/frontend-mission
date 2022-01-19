import { mount } from '@vue/test-utils';
import Footer from '@/components/ItemList/Footer.vue';

describe('FooterItem', () => {
  it('renders Footer', () => {
    const wrapper = mount(Footer);

    expect(wrapper.find('.item-list-footer').exists()).toBe(true);
  });
});
