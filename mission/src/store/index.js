import { createStore } from 'vuex';
// import Repository from '@/clients/RepositoryFactory';

// const GetRepository = Repository.get("get");
// const PostRepository = Repository.get("post");

const store = createStore({
  state() {
    return {
      cart: [],
      isDuplicate: false,
    };
  },
  mutations: {
    // async getCartList(state) {
    //   const { data } = await GetRepository.getCartList();
    //   state.cart = data.cart_item;
    // },
    async addToCart(state, curCart) {
      if (state.cart.filter((e) => e.product_no === curCart.product_no).length === 0) {
        // const res = await PostRepository.addItemToCart(curCart.productNo);
        // console.log(res);
        state.cart.push(curCart);
      } else state.isDuplicate = true;
    },
    initDuplicate(state) {
      state.isDuplicate = false;
    },
  },
});

export default store;
