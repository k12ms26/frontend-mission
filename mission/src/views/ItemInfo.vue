<template>
  <div id='item-info-page'>
    <ProductInfoPage
      :productDetail="productInfo"
    />
    <ReviewInfoPage
      :productDetail="productInfo"
    />

    <div class='fixed-cart-button'>
      <button data-test='buyProduct' class="buy-button">
        {{ displayPrice }}원 구매
      </button>
    </div>
  </div>
</template>

<script>
import ProductInfoPage from '@/components/ItemInfo/ProductInfo.vue';
import ReviewInfoPage from '@/components/ItemInfo/ReviewInfo.vue';

import Repository from '@/clients/RepositoryFactory';

const GetRepository = Repository.get("item");

export default {
  name: 'ItemInfoPage',
  components: {
    ProductInfoPage,
    ReviewInfoPage,
  },
  data() {
    return {
      productInfo: [],
      price: 0,
      originalPrice: 0,
    };
  },
  computed: {
    displayPrice() {
      let disPrice = this.originalPrice;
      if (this.price) disPrice = this.price;
      return disPrice.toLocaleString();
    },
  },
  methods: {
    async getItemDetail() {
      const { productNo } = this.$route.params;
      const { data } = await GetRepository.getItemDetail(productNo);
      this.productInfo = data;
      this.price = this.productInfo.item.price;
      this.originalPrice = this.productInfo.item.originalPrice;
    },
  },
  created() {
    this.getItemDetail();
  },
};
</script>

<style scoped>
#item-info-page {
  margin-bottom: 50px;
}

.fixed-cart-button {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  background-color: gray;
}

.buy-button {
  border: none;
  font-size: 16px;
  position: absolute;
  bottom: 10px;
  width: 100%;
  left: 0;
  color: white;
  background-color: gray;
}
</style>
