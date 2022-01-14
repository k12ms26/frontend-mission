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
    const price = wrapper.vm.productInfo.price;
    expect(wrapper.find('button[data-test="buyProduct"]').text()).toContain(`${Number(price).toLocaleString()}`);
  });

  test('check product data type', () => {
    const productInfo = wrapper.vm.productInfo;
    expect(typeof productInfo).toBe('object');
    expect(typeof productInfo.image).toBe('string');
    expect(typeof productInfo.name).toBe('string');
    expect(typeof productInfo.isOnSale).toBe('boolean');
    expect(typeof productInfo.description).toBe('string');
  });

  test('check review data type', () => {
    const reviewInfo = wrapper.vm.reviewInfo;
    expect(typeof reviewInfo).toBe('object'); //의문
    for(let i=0;i<reviewInfo.length;i++) {
      expect(typeof wrapper.vm.reviewInfo[i].nickname).toBe('string');
      expect(typeof wrapper.vm.reviewInfo[i].review).toBe('string');
      expect(typeof wrapper.vm.reviewInfo[i].image).toBe('string');
    }
  });

  test('check correct productInfo data are passed', () => {
    expect(wrapper.findComponent(ProductInfoPage).props()).toEqual({ productInfo: wrapper.vm.productInfo});
  });

  test('check correct reviewInfo data are passed', () => {
    expect(wrapper.findComponent(ReviewInfoPage).props()).toEqual({ reviewInfo: wrapper.vm.reviewInfo});
  });
});
