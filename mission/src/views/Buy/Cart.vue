<template>
  <div class="cart">
    <div v-if="isProductExists">
      <div
        v-for="(item, index) in cartList"
        :key="index"
        class="product-list"
      >
        <Item
          :item="item"
        />
      </div>
    </div>
    <div v-else>
      <div class="empty-title">장바구니에 담긴 상품이 없습니다.</div>
    </div>

    <router-link :to="isProductExists ? '/buy' : '/'">
      <div class="footer">
          <font-awesome-icon
            icon="store"
            class="footer-icon"
          />
          <span v-if="isProductExists">{{ totalPrice }} 원 주문하기</span>
          <span v-else>주문하러 가기</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import Item from '@/components/ItemList/Item.vue';

export default {
  name: 'Cart',
  components: {
    Item,
  },
  computed: {
    cartList() {
      return this.$store.state.cart;
    },
    isProductExists() {
      return this.cartList.length;
    },
    totalPrice() {
      let total = 0;
      this.cartList.forEach((cur) => {
        if (cur.price) total += cur.price;
        else total += cur.original_price;
      });

      return total.toLocaleString();
    },
  },
  methods: {
  },
  mounted() {
    // this.$store.commit('getCartList');
  },
};
</script>

<style scoped>
.empty-title {
  text-align: center;
}

.footer {
  position: fixed;
  bottom: 60px;
  background-color: darksalmon;
  width: 80%;
  padding: 12px 0;
  text-align: center;
  margin: 0 10%;
  color: whitesmoke;
}

.footer-icon {
  font-size: 20px;
  margin-right: 5px;
}
</style>
