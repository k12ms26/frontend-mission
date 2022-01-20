<template>
  <div
    id="item-list-page"
    ref="itemListPage"
  >
    <Header />

    <div
      class="item-list-body"
    >
      <div
        v-for="(item, index) in productList"
        :key="index"
        class="product-list"
        :style="oddStyle(index)"
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
              v-if="isSale(item.isOnSale)"
              class="sale-per-section"
            >
              <div
                class="product-list-sale-percentage"
                data-test="productSalePer"
              >{{ item.salePercentage }} %</div>
            </div>
            <div
              class="price-section"
            >
              <div
                class="product-list-price"
                data-test="productPrice"
              >{{ displayPrice(item.price, item.isOnSale, item.salePercentage) }} 원</div>
            </div>
          </div>
          <div
            class="product-list-name"
            data-test="productListName"
          >
            {{ productName(item.name, index) }}
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

    <div style="clear: both;"></div>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/ItemList/Header.vue';
import Footer from '@/components/ItemList/Footer.vue';
import TShirtImage from '@/assets/tshirts.jpg';

export default {
  name: 'ItemListPage',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      productList: [
        {
          name: 'product',
          image: TShirtImage,
          price: 190000,
          isOnSale: false,
          salePercentage: 0,
          description: 'this is description',
        }, {
          name: 'product',
          image: TShirtImage,
          price: 250000,
          isOnSale: false,
          salePercentage: 0,
          description: 'this is description',
        }, {
          name: 'product',
          image: TShirtImage,
          price: 250000,
          isOnSale: true,
          salePercentage: 25,
          description: 'this is description',
        }, {
          name: 'product',
          image: TShirtImage,
          price: 190000,
          isOnSale: false,
          salePercentage: 0,
          description: 'this is description',
        }, {
          name: 'product',
          image: TShirtImage,
          price: 156000,
          isOnSale: false,
          salePercentage: 0,
          description: 'this is description',
        }, {
          name: 'product',
          image: TShirtImage,
          price: 190000,
          isOnSale: false,
          salePercentage: 0,
          description: 'this is description',
        }, {
          name: 'product',
          image: TShirtImage,
          price: 156000,
          isOnSale: false,
          salePercentage: 0,
          description: 'this is description this is description this is description this is description this is description this is description',
        }, {
          name: 'product',
          image: TShirtImage,
          price: 190000,
          isOnSale: true,
          salePercentage: 15,
          description: 'this is description',
        }, {
          name: 'product',
          image: TShirtImage,
          price: 190000,
          isOnSale: false,
          salePercentage: 0,
          description: 'this is description',
        }, {
          name: 'product',
          image: TShirtImage,
          price: 250000,
          isOnSale: false,
          salePercentage: 0,
          description: 'this is description',
        }, {
          name: 'product',
          image: TShirtImage,
          price: 250000,
          isOnSale: true,
          salePercentage: 10,
          description: 'this is description',
        }, {
          name: 'product',
          image: TShirtImage,
          price: 156000,
          isOnSale: false,
          salePercentage: 0,
          description: 'this is description',
        }, {
          name: 'product',
          image: TShirtImage,
          price: 300000,
          isOnSale: false,
          salePercentage: 0,
          description: 'this is description this is description this is description this is description this is description',
        },
      ],
    };
  },
  methods: {
    productName(name, idx) {
      const num = Number(idx) + 1;
      return `${name} ${num}`;
    },
    oddStyle(idx) {
      if (idx === this.productList.length - 1 && idx % 2 === 0) {
        return 'float: left';
      }
      return '';
    },
    isSale(isOnSale) {
      if (isOnSale) return true;
      return false;
    },
    displayPrice(price, isOnSale, salePercentage) {
      let priceItem = price;

      if (this.isSale(isOnSale)) {
        priceItem = price * ((100 - salePercentage) / 100);
      }

      return priceItem.toLocaleString();
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
  color: orangered;
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
