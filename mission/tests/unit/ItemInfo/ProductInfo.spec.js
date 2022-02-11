import { mount } from '@vue/test-utils';
import ProductInfoPage from '@/components/ItemInfo/ProductInfo.vue';

describe('ProductInfoPage', () => {
  const wrapper = mount(ProductInfoPage);

  test('renders product data', async () => {
    const product_no = "asdf1234", name = "핏이 좋은 수트",
      image = "https://projectlion-vue.s3.ap-northeast-2.amazonaws.com/items/suit-1.png",
      price = 198000, original_price = 298000,
      description = "<div><p><strong>체형에 관계없이 누구에게나 맞는 수트!</strong></p> <img style=\"width: 100%;\" src=\"https://projectlion-vue.s3.ap-northeast-2.amazonaws.com/items/suit-2.png\"/> <p>연말 송년회에 아주 어울릴 수트 판매합니다!</p></div>";

    await wrapper.setProps({
      productDetail: {
        product_no: product_no,
        name: name,
        image: image,
        price: price,
        original_price: original_price,
        description: description,
      },
    });

    expect(wrapper.find('img[data-test="productImage"]').attributes('src')).toBe(image);
    expect(wrapper.find('div[data-test="productName"]').text()).toBe(name);
    expect(wrapper.find('div[data-test="productOriginal"]').text()).toBe(original_price.toLocaleString());
    expect(wrapper.find('div[data-test="productDescription"]').text()).toBe(description);
  });

  //다시
  test('renders sale price', async () => {
    if(price !== original_price) {
      const salePercentage = Math.floor((1 - (price / original_price)) * 100);
      expect(wrapper.find('div[data-test="productSalePercentage"]').text()).toBe(`${salePercentage} %`);
      expect(wrapper.find('div[data-test="productSalePrice"]').text()).toBe(price.toLocaleString());
    }
  });

  test('renders seller data', async () => {
    const seller_no = 1, name = "대한양복", hash_tags = ["남성", "수트"],
      profile_image = "https://projectlion-vue.s3.ap-northeast-2.amazonaws.com/sellers/seller.png";

      await wrapper.setProps({
      sellerDetail: {
        seller_no: seller_no,
        name: name,
        hash_tags: hash_tags,
        profile_image: profile_image,
      },
    });

    expect(wrapper.find('img[data-test="sellerImage"]').attributes('src')).toBe(profile_image);
    expect(wrapper.find('div[data-test="sellerName"]').text()).toBe(name);
    expect(wrapper.find('span[data-test="sellerTag"]').text()).toContain(hash_tags[0]);
    expect(wrapper.find('span[data-test="sellerTag"]').text()).toContain(hash_tags[1]);
  });
})
