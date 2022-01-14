<template>
  <div id='item-info-page'>
    <ProductInfoPage
      :productInfo="productInfo"
    />
    <ReviewInfoPage
      :reviewInfo="reviewInfo"
    />

    <div class='fixed-cart-button'>
      <button data-test='buyProduct' class="buy-button">
        {{ productInfo.price ? Number(setPrice()).toLocaleString() : '0' }}원 구매
      </button>
    </div>
  </div>
</template>

<script>
import ProductInfoPage from '@/components/ItemInfo/ProductInfo.vue';
import ReviewInfoPage from '@/components/ItemInfo/ReviewInfo.vue';

import TShirtImage from '@/assets/tshirts.jpg';
import SellerImage from '@/assets/seller.jpg';
import TShirtDetailImage from '@/assets/tshirtsDetail.jpg';
import ReviewImage from '@/assets/review.jpg';

export default {
  name: 'ItemInfoPage',
  components: {
    ProductInfoPage,
    ReviewInfoPage,
  },
  data() {
    return {
      productInfo: {
        image: TShirtImage,
        name: '편한 티셔츠',
        price: 198000,
        isOnSale: true,
        salePercentage: 25,
        description: `
          <div style="text-align: left">
            <div style="font-size: 14px">무난하게 입을 수 있는 티셔츠 입니다.</div>
            <div style="font-weight: bold">별점 10점 만점 10점!</div>
            <br>
            <img src="${TShirtDetailImage}" style="width: 100%" />
          </div>
        `,
        sellerInfo: {
          image: SellerImage,
          name: '김민선',
          tag: [
            '남녀공용',
            '편한',
            '티셔츠',
            '가성비',
          ],
        },
      },
      reviewInfo: [
        {
          nickname: 'mk1111222',
          date: '2022-01-12',
          title: '좋아요',
          detail: '사진 그대로예요',
          image: '',
        },
        {
          nickname: 'minsun',
          date: '2022-01-12',
          title: '굿',
          detail: '휘뚜루마뚜루 입고다니기 좋습니다',
          image: ReviewImage,
        },
      ],
    };
  },
  methods: {
    setPrice() {
      if (this.productInfo.isOnSale) {
        return this.productInfo.price * ((100 - this.productInfo.salePercentage) / 100);
      }

      return this.productInfo.price;
    },
  },
};
</script>

<style scoped>
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
