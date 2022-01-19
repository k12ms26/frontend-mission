import { mount } from '@vue/test-utils';
import ItemInfoPage from '@/views/ItemInfo.vue';
import ProductInfoPage from '@/components/ItemInfo/ProductInfo.vue';
import ReviewInfoPage from '@/components/ItemInfo/ReviewInfo.vue';

describe('ItemInfoPage', () => {
  const wrapper = mount(ItemInfoPage);

  test('renders ItemInfoPage', () => {
    expect(wrapper.find('#item-info-page').exists()).toBe(true);
  });

  test('renders buyButton', () => {
    expect(wrapper.find('button[data-test="buyProduct"]').exists()).toBe(true);
  });

  test('buyButton contains price', () => {
    const price = 10000, percentage = 25, isOnSale = true;

    const wrapper = mount(ItemInfoPage, {
      data() {
        return {
          productInfo: {
            price: price,
            isOnSale: isOnSale,
            salePercentage: percentage,
          }
        }
      }
    })

    if(isOnSale) {
      const salePrice = price * ((100 - percentage) / 100);
      expect(wrapper.find('button[data-test="buyProduct"]').text()).toContain(`${Number(salePrice).toLocaleString()}`);
    } else {
      expect(wrapper.find('button[data-test="buyProduct"]').text()).toContain(`${Number(price).toLocaleString()}`);
    }
  });

  test('check correct productInfo data are passed', () => {
    expect(wrapper.findComponent(ProductInfoPage).props()).toEqual({productInfo: wrapper.vm.productInfo});
  });

  test('check correct reviewInfo data are passed', () => {
    expect(wrapper.findComponent(ReviewInfoPage).props()).toEqual({ reviewInfo: wrapper.vm.reviewInfo});
  });
});
