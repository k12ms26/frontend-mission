import { mount } from '@vue/test-utils';
import BuyPage from '@/views/Buy/Buy.vue';
import { mutations } from '@/store/index';

describe('CartPage', () => {
  const mockRoute = {};
  const mockRouter = {
    push: jest.fn()
  };
  const wrapper = mount(BuyPage, {
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
    expect(wrapper.find('span[data-test="totalListLength"]').text()).toEqual(state.cart.length);
  });

  test("link to SuccessPage", async () => {
    await wrapper.find('[data-test="buyButton"]').trigger('click');
    expect(mockRouter.push).toHaveBeenCalledTimes(1);
    expect(mockRouter.push).toHaveBeenCalledWith('/success');
  });
});
