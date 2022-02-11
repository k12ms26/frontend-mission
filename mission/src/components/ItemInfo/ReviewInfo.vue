<template>
  <div id='review-info-page'>
    <div class="detail-section">
      <div class="detail-title">리뷰</div>
      <div
        v-for="(item, index) in reviewInfo"
        :key="index"
        style="text-align: left"
        data-test="reviewInfo"
      >
        <div class="info-section">
          <div
            class="product-info"
            data-test="reviewWriter"
          >
            {{ item.writer }}
          </div>
          <div
            class="product-info"
            data-test="reviewDate"
          >
            {{ item.created }}
          </div>
        </div>

        <div
          :style="item.img && {position: 'relative', height: `${reviewImageSize}px`}"
        >
          <div style="width: 70%; display: inline-block">
            <div
              style="font-size: 18px; font-weight: bold"
              data-test="reviewTitle"
            >
              {{ item.title }}
            </div>
            <div
              data-test="reviewContent"
            >
              {{ item.content }}
            </div>
          </div>
          <img
            v-if="isImgExists(item.img)"
            :src="item.img"
            :width="reviewImageSize"
            :height="reviewImageSize"
            class="review-image"
            data-test="reviewImage"
          />
        </div>

        <hr /><br>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewInfoPage',
  props: {
    reviewDetail: Object,
  },
  data() {
    return {
      reviewImageSize: 0,
    };
  },
  methods: {
    isImgExists(img) {
      if (img === '') return false;
      return true;
    },
    changeImageSize() {
      this.reviewImageSize = window.innerWidth / 4;
    },
  },
  computed: {
    reviewInfo() {
      return this.reviewDetail;
    },
  },
  created() {
    this.changeImageSize();
  },
  mounted() {
    window.addEventListener('resize', this.changeImageSize);
  },
};
</script>

<style scoped>
.review-image {
  position: absolute;
  right: 5px;
}
</style>
