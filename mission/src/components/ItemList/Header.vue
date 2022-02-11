<template>
  <div
    class="item-list-header"
    ref="itemListHeader"
  >
    <div
      class="header-section"
    >
      <div
        class="header-title"
        data-test="headerTitle"
      >MS MALL</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    scrollHandler() {
      const currentScrollPos = window.pageYOffset;
      const el = this.$refs.itemListHeader;
      if (currentScrollPos === 0) {
        el.style.top = "0";
        // document.getElementById("item-list-header").style.top = "0";
      } else {
        el.style.top = "-20%";
        // document.getElementById("item-list-header").style.top = "-60px";
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.scrollHandler());
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.scrollHandler());
  },
};
</script>

<style scoped>
.item-list-header {
  position: fixed;
  top: 0;
  width: 100%;
  transition: top 0.3s;
  z-index: 9999;
}

.header-section {
  background-color: whitesmoke;
}

.header-title {
  font-size: 125%;
  font-weight: bold;
  color: darksalmon;
  padding: 5%;
  text-align: left;
}

</style>
