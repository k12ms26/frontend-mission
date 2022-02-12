import { mount } from '@vue/test-utils';
import CartPage from '@/views/Buy/Cart.vue';
import { mutations } from '@/store/index';

describe('CartPage', () => {
  const mockRoute = {};
  const mockRouter = {
    push: jest.fn()
  };
  const wrapper = mount(CartPage, {
    props: {
      isAuthenticated: true,
    },
    global: {
      mocks: {
        $route: mockRoute,
        $router: mockRouter
      }
    },
  });
  const { addToCart } = mutations;
  const data = {
    name: 'hi',
    price: 10000
  };
  const state = { cart: [] };

  test('renders stored cart data', async () => {
    await addToCart(state, data);
    expect(wrapper.find('div[data-test="cartList"]').findAll()).toContain(state.cart);
  });

  test("link to BuyPage", async () => {
    await wrapper.find('[data-test="buyButton"]').trigger('click');
    expect(mockRouter.push).toHaveBeenCalledTimes(1);
    expect(mockRouter.push).toHaveBeenCalledWith('/buy');
  });
});
