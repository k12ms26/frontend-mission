import { mount } from '@vue/test-utils';
import ProductInfoPage from '@/components/ItemInfo/ProductInfo.vue';

describe('ProductInfoPage', () => {
  const wrapper = mount(ProductInfoPage);

  test('renders product data', async () => {
    const isOnSale = true;

    await wrapper.setProps({
      productDetail: {
        image: '',
        name: '편한 티셔츠',
        price: 198000,
        isOnSale: isOnSale,
        salePercentage: 25,
        description: `
          <div style="text-align: left">
            <div style="font-size: 14px">무난하게 입을 수 있는 티셔츠 입니다.</div>
            <div style="font-weight: bold">별점 10점 만점 10점!</div>
            <br>
            <img src="" style="width: 100%" />
          </div>
        `,
      },
    });

    expect(wrapper.find('img[data-test="productImage"]').exists()).toBe(true);
    expect(wrapper.find('div[data-test="productName"]').exists()).toBe(true);
    expect(wrapper.find('div[data-test="productOriginal"]').exists()).toBe(true);
    expect(wrapper.find('div[data-test="productDescription"]').exists()).toBe(true);

    if(isOnSale) {
      expect(wrapper.find('div[data-test="productSalePercentage"]').exists()).toBe(true);
      expect(wrapper.find('div[data-test="productSalePrice"]').exists()).toBe(true);
    }
  });

  test('renders seller data', async () => {
    await wrapper.setProps({
      productInfo: {
        seller: {
          image: '',
          name: '김민선',
          tag: [
            '남녀공용',
            '편한',
            '티셔츠',
            '가성비',
          ],
        },
      },
    });

    expect(wrapper.find('img[data-test="sellerImage"]').exists()).toBe(true);
    expect(wrapper.find('div[data-test="sellerName"]').exists()).toBe(true);
    expect(wrapper.find('span[data-test="sellerTag"]').exists()).toBe(true);
  });
})
