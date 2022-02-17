<template>
  <div class="buy-section">
    <div class="buy-title-section">
      <img
        :src="thumbnail"
        class="buy-image"
        data-test="productListImage"
      />
      <span class="buy-title">
        {{ thumbTitle }} 포함
        <span data-test="totalListLength">{{ totalListLength }}</span>건
        {{ totalPrice }}원
      </span>
    </div>

    <form
      ref="buyForm"
      class="buy-form"
    >
      <div class="input-section">
        <div>주문자명</div>
        <input
          v-model="customerName"
          class="input"
        />
      </div>

      <div class="input-section">
        <div>전화번호</div>
        <input
          v-model="customerNumber"
          class="input"
        />
      </div>

      <div class="input-section">
        <div>수령주소</div>
        <input
          v-model="customerAddr"
          class="input"
        />
      </div>

      <div class="input-section">
        <div>배송 방법</div>
        <div class="delivery-section">
          <input type="radio" name="deliveryMethod" value="택배" checked="checked">택배
          <input type="radio" name="deliveryMethod" value="퀵 배송">퀵 배송
        </div>
      </div>

      <div class="input-section">
        <div>결제 방법</div>
        <button
          class="payment-section"
          name="paymentMethod"
        >
          <font-awesome-icon
            icon="credit-card"
            class="icon"
            data-test="likeIcon"
          />
          <span>신용/체크카드</span>
        </button>

        <button
          class="payment-section"
          name="paymentMethod"
        >
          <font-awesome-icon
            icon="piggy-bank"
            class="icon"
            data-test="likeIcon"
          />
          <span>계좌이체</span>
        </button>
      </div>
    </form>

    <router-link to="/success">
      <div class="footer" data-test="buyButton">
          <font-awesome-icon
            icon="store"
            class="icon"
          />
          <span>구매하기</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Buy',
  data() {
    return {
      customerName: '',
      customerNumber: '',
      customerAddr: '',
    };
  },
  computed: {
    cartList() {
      return this.$store.state.cart;
    },
    totalListLength() {
      return this.cartList.length;
    },
    thumbnail() {
      return this.cartList[0].image;
    },
    thumbTitle() {
      return this.cartList[0].name;
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
};
</script>

<style scoped>
.buy-section {
  text-align: center;
}

.buy-title-section {
  margin: 0 0 10% 25%;
  display: flex;
  align-items: center;
}

.buy-image {
  width: 10%;
  height: 10%;
  vertical-align: middle;
}

.buy-title {
  color: salmon;
  font-weight: 200;
  font-size: 16px;
  margin-left: 5px;
}

.buy-form {
  text-align: left;
  margin-left: 15%;
}

.buy-form .input {
  width: 80%;
}

.input-section {
  margin-bottom: 15px;
}

.delivery-section {
  margin-top: 10px;
}

.payment-section {
  margin: 10px 5px 0 0;
  width: 40%;
  background-color: lightgray;
  border: none;
  color: brown;
  font-weight: 800;
  padding: 12px 0;
}
</style>
