<template>
  <div id='item-info-page'>
    <ProductInfoPage
      :productInfo="productInfo"
    />
    <ReviewInfoPage
      :reviewInfo="reviewInfo"
    />

    <div id='fixed-cart-button'>
      <button data-test='buyProduct'>
        {{ productInfo.price ? Number(productInfo.price).toLocaleString() : '0' }}원 구매
      </button>
    </div>
  </div>
</template>

<script>
import ProductInfoPage from '@/components/ItemInfo/ProductInfo.vue';
import ReviewInfoPage from '@/components/ItemInfo/ReviewInfo.vue';

export default {
  name: 'ItemInfoPage',
  components: {
    ProductInfoPage,
    ReviewInfoPage,
  },
  data() {
    return {
      productInfo: {
        image: '',
        name: '',
        price: 198000,
        isOnSale: true,
        description: '<div>this is description</div>',
      },
      reviewInfo: [
        {
          nickname: '',
          review: '',
          image: '',
        },
        {
          nickname: '',
          review: '',
          image: '',
        },
      ],
    };
  },
  methods: {

  },
};
</script>

<style scoped>

</style>
