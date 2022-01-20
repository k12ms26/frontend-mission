<template>
  <div
    id="item-list-header"
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
      window.onscroll = () => {
        const currentScrollPos = window.pageYOffset;
        if (currentScrollPos === 0) {
          this.$refs.itemListHeader.style.top = "0";
          // document.getElementById("item-list-header").style.top = "0";
        } else {
          this.$refs.itemListHeader.style.top = "-60px";
          // document.getElementById("item-list-header").style.top = "-60px";
        }
      };
    },
  },
  mounted() {
    this.scrollHandler();
  },
};
</script>

<style scoped>
#item-list-header {
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
