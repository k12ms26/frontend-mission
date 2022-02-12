<template>
  <div id="menu">
    <Header />
    <div class="menu">
      <router-view></router-view>
    </div>
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
  margin-top: 20%;
}

.title {
  text-align: left;
  margin: 10% 5%;
  font-size: 14px;
}
</style>
