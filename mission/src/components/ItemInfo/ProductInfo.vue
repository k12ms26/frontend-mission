<template>
  <div id="product-info-page">
    <div class="info-section img-section">
      <img
        :src="productInfo.image"
        class="product-image"
        data-test="productImage"
      />
    </div>

    <div class="info-section">
      <div class="seller-img-section">
        <img
          :src="sellerInfo.profile_image"
          class="seller-image"
          data-test="sellerImage"
        />
      </div>
      <div class="seller-info">
        <div
          class="seller-info-detail"
          data-test="sellerName"
        >{{ sellerInfo.name }}</div>
        <span
          v-for="(item, index) in sellerInfo.hash_tags"
          :key="index"
          class="seller-info-detail"
          data-test="sellerTag"
        >
          <span>
            # {{ item }}
          </span>
        </span>
      </div>
      <div class="seller-img-section star-section">
        <font-awesome-icon
          icon="star"
          class="star-icon"
        />
      </div>
    </div>

    <hr />

    <div class="detail-section">
      <div class="product-detail-section">
        <div
          style="font-size: 24px; font-weight: bold"
          data-test="productName"
        >{{ productInfo.name }}</div>
        <div class="product-price-section">
          <div
            :v-if="isOnSale()"
            class="product-info"
            style="font-size: 18px; color: indianred"
            data-test="productSalePercentage"
          >
            {{ displaySalePercentage }}%
          </div>
          <div
            :v-if="isOnSale()"
            class="product-info"
            data-test="productSalePrice"
          >
            {{ displaySalePrice }}원
          </div>
          <div
            :style="isOnSale() && { textDecoration: 'line-through', fontSize: '12px'}"
            class="product-info"
            data-test="productOriginalPrice"
          >
            {{ displayOriginalPrice }}원
          </div>
        </div>
      </div>

      <div class="detail-title">상품정보</div>
      <div
        v-html="productInfo.description"
        data-test="productDescription"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductInfoPage',
  props: {
    productDetail: Object,
    sellerDetail: Object,
  },
  methods: {
    isOnSale() {
      const salePrice = this.productInfo.price;
      let isOnSale = false;

      if (salePrice) isOnSale = true;
      return isOnSale;
    },
  },
  computed: {
    productInfo() {
      return this.productDetail;
    },
    sellerInfo() {
      return this.sellerDetail;
    },
    displaySalePercentage() {
      const salePrice = this.productInfo.price;
      const originalPrice = this.productInfo.original_price;

      if (salePrice) return Math.floor((1 - (salePrice / originalPrice)) * 100);
      return '';
    },
    displaySalePrice() {
      return Number(this.productInfo.price).toLocaleString();
    },
    displayOriginalPrice() {
      return Number(this.productInfo.original_price).toLocaleString();
    },
  },
};
</script>

<style scoped>
.product-image, .seller-image, .star-icon {
  position: absolute;
  width: 100%;
  height: 100%;
}

.seller-image {
  border-radius: 50%;
}

.seller-img-section {
  width: 15%;
  position: relative;
  display: inline-block;
}

.seller-img-section::after {
  content: "";
  display: block;
  padding-bottom: 100%;
}

.star-section {
  width: 8%;
  float: right;
  margin: 4% 4% 0;
  color: gold;
}

.seller-info {
  display: inline-block;
  text-align: left;
  width: 62%;
  position: absolute;
  margin: 10px 0 0 10px;
  font-size: 12px;
}

.product-detail-section {
  text-align: left;
}

.product-price-section {
  margin-top: 5px;
}
</style>
