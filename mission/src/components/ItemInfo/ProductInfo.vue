<template>
  <div id="product-info-page">
    <div class="info-section">
      <img
        :src="productInfo.image"
        :width="productImageSize"
        :height="productImageSize"
        class="product-image"
      />
    </div>

    <div class="info-section" :style="{height: productImageSize}">
      <div class="seller-image">
        <img
          :src="productInfo.sellerInfo.image"
          :width="sellerImageSize"
          :height="sellerImageSize"
          class="seller-image"
        />
      </div>
      <div class="seller-info">
        <div class="seller-info-detail">{{ productInfo.sellerInfo.name }}</div>
        <span
          v-for="(item, index) in productInfo.sellerInfo.tag"
          :key="index"
          class="seller-info-detail"
        >
          <span v-if="index <= 1">
            # {{ item }}
          </span>
        </span>
      </div>
      <div class="seller-info star-icon">
        <fa icon="star" :style="{width: starSize, height: starSize}"/>
      </div>
    </div>

    <hr />

    <div class="detail-section">
      <div class="product-detail-section">
        <div style="font-size: 24px; font-weight: bold">{{ productInfo.name }}</div>
        <div class="product-price-section">
          <div
            :v-if="productInfo.isOnSale"
            class="product-info"
            style="font-size: 18px; color: orangered"
          >
            {{ productInfo.salePercentage }}%
          </div>
          <div class="product-info">
            {{ salePrice.toLocaleString() }}원
          </div>
          <div
            :style="productInfo.isOnSale && { textDecoration: 'line-through', fontSize: '12px'}"
            class="product-info"
          >
            {{ Number(productInfo.price).toLocaleString() }}원
          </div>
        </div>
      </div>

      <div class="detail-title">상품정보</div>
      <div v-html="productInfo.description"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductInfoPage',
  props: {
    productInfo: Object,
  },
  data() {
    return {
      productImageSize: 0,
      sellerImageSize: 0,
      starSize: 0,
      salePrice: 0,
    };
  },
  methods: {
    changeImageSize() {
      this.productImageSize = window.innerWidth - 20;
      this.sellerImageSize = window.innerWidth / 6;
      this.starSize = window.innerWidth / 15;
    },
    setSalePrice() {
      if (this.productInfo.isOnSale) {
        const price = this.productInfo.price * ((100 - this.productInfo.salePercentage) / 100);
        this.salePrice = Math.floor(price);
      }
    },
  },
  computed: {

  },
  created() {
    this.changeImageSize();
  },
  mounted() {
    window.addEventListener('resize', this.changeImageSize);
    this.setSalePrice();
  },
};
</script>
