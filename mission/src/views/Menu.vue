<template>
  <div id="menu">
    <Header />
    <router-view
      class="menu"
    ></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/ItemList/Header.vue';
import Footer from '@/components/ItemList/Footer.vue';

export default {
  name: 'Menu',
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
.menu {
  margin-top: 80px;
}
</style>
