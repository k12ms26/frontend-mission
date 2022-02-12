import { mount } from '@vue/test-utils';
import SuccessPage from '@/views/Buy/Success.vue';

describe('CartPage', () => {
  const mockRoute = {};
  const mockRouter = {
    push: jest.fn()
  };
  const wrapper = mount(SuccessPage, {
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

  test("link to MainPage", async () => {
    await wrapper.find('div[data-test="backButton"]').trigger('click');
    expect(mockRouter.push).toHaveBeenCalledTimes(1);
    expect(mockRouter.push).toHaveBeenCalledWith('/');
  });
});
