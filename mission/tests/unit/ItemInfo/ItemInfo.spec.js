import { mount } from '@vue/test-utils';
import ItemInfoPage from '@/views/ItemInfo.vue';

describe('ItemInfoPage', () => {
  const wrapper = mount(ItemInfoPage);

  test('renders ItemInfoPage', () => {
    expect(wrapper.find('#item-info-page').exists()).toBe(true);
  });

  test('renders buyButton', () => {
    expect(wrapper.find('button[data-test="buyProduct"]').exists()).toBe(true);
  });

  test('buyButton contains price', () => {
    const price = 10000, originalPrice = 20000;

    const wrapper = mount(ItemInfoPage, {
      data() {
        return {
          productInfo: {
            price: price,
            original_price: originalPrice,
          }
        }
      }
    })

    if(price !== originalPrice) {
      expect(wrapper.find('button[data-test="buyProduct"]').text()).toContain(`${Number(price).toLocaleString()}`);
    } else {
      expect(wrapper.find('button[data-test="buyProduct"]').text()).toContain(`${Number(originalPrice).toLocaleString()}`);
    }
  });
});
