import { mount } from '@vue/test-utils';
import ItemList from '@/components/ItemList/Item.vue';

describe('ItemList', () => {
  const name = "핏이 좋은 수트",
    image = "https://projectlion-vue.s3.ap-northeast-2.amazonaws.com/items/suit-1.png",
    price = 198000, original_price = 298000, description = "아주 잘 맞는 수트";

  const wrapper = mount(ItemList, {
    props: {
      name: name,
      price: price,
      image: image,
      original_price: original_price,
      description: description,
    },
  });

  test('renders ItemList', () => {
    expect(wrapper.find('.item-list-body').exists()).toBe(true);
  });

  test('renders product list', () => {
    expect(wrapper.find('[data-test="productListName"]').text()).toContain(name);
    expect(wrapper.find('img[data-test="productListImage"').attributes('src')).toBe(image);
    expect(wrapper.find('[data-test="productDesc"]').text()).toBe(description);
  });

  test('renders sale price', async () => {
    if(price !== original_price) {
      const salePercentage = Math.floor((1 - (price / original_price)) * 100);
      expect(wrapper.find('[data-test="productSalePer"]').text()).toContain(salePercentage);
      expect(wrapper.find('[data-test="productPrice"]').text()).toContain(price.toLocaleString());
    } else {
      expect(wrapper.find('[data-test="productPrice"]').text()).toContain(original_price.toLocaleString());
    }
  });
});
