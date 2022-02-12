import { mutations } from '@/store/index';

describe('Store', () => {
  test('renders cart data', () => {
    const { addToCart } = mutations;
    const data = {
      name: 'hi',
      price: 10000
    };
    const state = { cart: [] };
    addToCart(state, data);
    expect(state.cart).to.equal([ data ]);
  });

  test('renders duplicate flag', () => {
    const { initDuplicate } = mutations;
    const state = { isDuplicate: true };
    initDuplicate(state);
    expect(state.isDuplicate).to.equal(false);
  });
});
