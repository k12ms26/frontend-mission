import { mount } from '@vue/test-utils';
import ItemInfoPage from '@/views/ItemList.vue';
import image from '@/assets/tshirts.jpg';

describe('ItemListPage', () => {
  test('renders ItemListPage', () => {
    const wrapper = mount(ItemInfoPage);

    expect(wrapper.find('#item-list-page').exists()).toBe(true);
  });

  test('renders product list', () => {
    const name = 'test', price = 220000, isOnSale = true, salePercentage = 25, description = 'this is test';
    const salePrice = price * ((100 - salePercentage) / 100);

    const wrapper = mount(ItemInfoPage, {
      data() {
        return {
          productList: [
            {
              name: name,
              image: image,
              price: price,
              isOnSale: isOnSale,
              salePercentage: salePercentage,
              description: description,
            },
          ]
        }
      }
    });

    expect(wrapper.find('[data-test="productListName"]').text()).toContain(name);
    expect(wrapper.find('img[data-test="productListImage"').attributes('src')).toBe(image);
    expect(wrapper.find('[data-test="productSalePer"]').text()).toContain(salePercentage);
    expect(wrapper.find('[data-test="productPrice"]').text()).toContain(salePrice.toLocaleString());
    expect(wrapper.find('[data-test="productDesc"]').text()).toBe(description);
  })
});
