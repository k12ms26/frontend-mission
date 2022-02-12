import { mount } from '@vue/test-utils';
import ItemInfoPage from '@/views/Items/ItemInfo.vue';
import { mutations } from '@/store/index';

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

  test('renders cart alert : stored successfully', async () => {
    const { addToCart, initDuplicate } = mutations;
    const data = {
      name: 'hi',
      price: 10000
    };
    const state = { isDuplicate: true, cart: [] };

    await initDuplicate(state);
    expect(state.isDuplicate).to.equal(false);

    jest.spyOn(window, 'confirm').mockImplementation(() => { });
    await wrapper.get('button[data-test="buyProduct"]').trigger('click');
    await addToCart(state, data);
    expect(window.confirm).toBeCalledWith('상품이 장바구니에 담겼습니다. 장바구니로 이동하시겠습니까?');
  });
});
