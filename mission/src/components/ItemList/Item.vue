<template>
    <div
      class="item-list-body"
    >
      <div
        v-for="(item, index) in products"
        :key="index"
        class="product-list"
        :style="oddStyle(index)"
        @click="goToDetail(item)"
      >
        <div class="section">
          <img
            :src="item.image"
            class="product-list-image"
            data-test="productListImage"
          />
        </div>

        <div
          class="info-section"
        >
          <div>
            <div
              v-if="isSale(item.price)"
              class="sale-per-section"
            >
              <div
                class="product-list-sale-percentage"
                data-test="productSalePer"
              >{{ displaySalePercentage(item) }} %</div>
            </div>
            <div
              class="price-section"
            >
              <div
                class="product-list-price"
                data-test="productPrice"
              >{{ displayPrice(item) }} 원</div>
            </div>
          </div>
          <div
            class="product-list-name"
            data-test="productListName"
          >
            {{ item.name }}
          </div>
          <div
            class="product-list-description"
            data-test="productDesc"
          >
            {{ item.description }}
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ItemList',
  props: {
    productList: Object,
  },
  methods: {
    async goToDetail(item) {
      const productNo = item.product_no;
      this.$emit('goToDetail', productNo);
    },
    oddStyle(idx) {
      if (idx === this.products.length - 1 && idx % 2 === 0) {
        return 'float: left';
      }
      return '';
    },
    isSale(salePrice) {
      if (salePrice) return true;
      return false;
    },
    displaySalePercentage(item) {
      const salePrice = item.price;
      const originalPrice = item.original_price;

      if (this.isSale(salePrice)) return Math.floor((1 - (salePrice / originalPrice)) * 100);
      return '';
    },
    displayPrice(item) {
      const salePrice = item.price;
      const originalPrice = item.original_price;

      let price = originalPrice;

      if (this.isSale(salePrice)) price = salePrice;
      return price.toLocaleString();
    },
  },
  computed: {
    products() {
      return this.productList.items;
    },
  },
};
</script>

<style scoped>
#item-list-page {
  margin-bottom: 100px;
}

.item-list-body {
  margin-top: 60px;
}

.product-list {
  display: inline-block;
  box-sizing: border-box;
  width: 50%;
}

.section {
  width: 90%;
  position: relative;
  display: inline-flex;
  margin: 10% 2% 3% 2%;
}

.section::after {
  content: "";
  display: block;
  padding-bottom: 90%;
}

.product-list-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info-section {
  text-align: left;
  margin-left: 5%;
}

.sale-per-section {
  width: 40%;
  display: inline;
  margin-right: 3%;
}

.product-list-sale-percentage {
  display: inline-block;
  color: indianred;
  font-weight: bold;
  font-size: 95%;
}

.price-section {
  width: 60%;
  display: inline-block;
}

.product-list-price {
  font-weight: bold;
  font-size: 90%;
}

.product-list-name {
  font-size: 85%;
  margin: 2% 0;
}

.product-list-description {
  width: 90%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: lightslategray;
  font-size: 85%;
}
</style>
