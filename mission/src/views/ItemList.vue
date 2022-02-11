<template>
  <div id="item-list-page" ref="itemListPage">
    <Header />

    <div
      v-for="(item, index) in productList"
      :key="index"
      class="product-list"
      :style="oddStyle(index)"
      @click="goToDetail(item)"
      data-test="productList"
    >
      <Item
        :item="item"
      />
    </div>

    <div style="clear: both;"></div>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/ItemList/Header.vue';
import Footer from '@/components/ItemList/Footer.vue';
import Item from '@/components/ItemList/Item.vue';

import Repository from '@/clients/RepositoryFactory';

const GetRepository = Repository.get("item");

export default {
  name: 'ItemListPage',
  components: {
    Header,
    Footer,
    Item,
  },
  data() {
    return {
      productList: [],
    };
  },
  created() {
    this.getItems();
  },
  methods: {
    async getItems() {
      const { data } = await GetRepository.getItemList();
      this.productList = data.items;
    },
    async goToDetail(item) {
      const productNo = item.product_no;
      this.$router.push(`/items/${productNo}`);
    },
    oddStyle(idx) {
      if (idx === this.productList.length - 1 && idx % 2 === 0) {
        return 'float: left';
      }
      return '';
    },
  },
};
</script>

<style scoped>
.product-list {
  display: inline-block;
  box-sizing: border-box;
  width: 50%;
}
</style>
