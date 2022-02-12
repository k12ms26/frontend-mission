import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      cart: [],
      isDuplicate: false,
    };
  },
  mutations: {
    addToCart(state, curCart) {
      if (state.cart.filter((e) => e.product_no).length === 0) {
        state.cart.push(curCart);
      } else state.isDuplicate = true;
    },
    initDuplicate(state) {
      state.isDuplicate = false;
    },
  },
});

export default store;
