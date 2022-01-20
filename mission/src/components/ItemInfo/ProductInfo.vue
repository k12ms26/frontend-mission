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
          :src="productInfo.sellerInfo.image"
          class="seller-image"
          data-test="sellerImage"
        />
      </div>
      <div class="seller-info">
        <div
          class="seller-info-detail"
          data-test="sellerName"
        >{{ productInfo.sellerInfo.name }}</div>
        <span
          v-for="(item, index) in productInfo.sellerInfo.tag"
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
            :v-if="productInfo.isOnSale"
            class="product-info"
            style="font-size: 18px; color: orangered"
            data-test="productSalePercentage"
          >
            {{ productInfo.salePercentage }}%
          </div>
          <div
            :v-if="productInfo.isOnSale"
            class="product-info"
            data-test="productSalePrice"
          >
            {{ displaySalePrice }}원
          </div>
          <div
            :style="productInfo.isOnSale && { textDecoration: 'line-through', fontSize: '12px'}"
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
    productInfo: {
      image: String,
      name: String,
      price: Number,
      isOnSale: Boolean,
      salePercentage: Number,
      description: String,
      sellerInfo: {
        image: String,
        name: String,
        tag: Array,
      },
    },
  },
  data() {
    return {
      salePrice: 0,
    };
  },
  methods: {
    setSalePrice() {
      if (this.productInfo.isOnSale) {
        const price = this.productInfo.price * ((100 - this.productInfo.salePercentage) / 100);
        this.salePrice = Math.floor(price);
      }
    },
  },
  computed: {
    displaySalePrice() {
      return this.salePrice.toLocaleString();
    },
    displayOriginalPrice() {
      return Number(this.productInfo.price).toLocaleString();
    },
  },
  mounted() {
    this.setSalePrice();
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
