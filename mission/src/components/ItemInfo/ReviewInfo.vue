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
          <div class="product-info">{{ setNicknamePrivate(item.nickname) }}</div>
          <div class="product-info">{{ item.date }}</div>
        </div>

        <div
          :style="item.image && {position: 'relative', height: `${reviewImageSize}px`}"
        >
          <div style="width: 70%; display: inline-block">
            <div style="font-size: 18px; font-weight: bold">{{ item.title }}</div>
            <div>{{ item.detail }}</div>
          </div>
          <img
            v-if="item.image"
            :src="item.image"
            :width="reviewImageSize"
            :height="reviewImageSize"
            class="review-image"
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
    reviewInfo: Object,
  },
  data() {
    return {
      reviewImageSize: 0,
    };
  },
  methods: {
    changeImageSize() {
      this.reviewImageSize = window.innerWidth / 4;
    },
    setNicknamePrivate(nickname) {
      return nickname.substring(0, 2) + '*'.repeat(nickname.length - 2);
    },
  },
  computed: {

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
