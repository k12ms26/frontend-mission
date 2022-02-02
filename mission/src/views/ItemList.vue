<template>
  <div id="item-list-page" ref="itemListPage">
    <Header />

    <ItemList
      :productList="productList"
    />
    <div style="clear: both;"></div>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/ItemList/Header.vue';
import Footer from '@/components/ItemList/Footer.vue';
import ItemList from '@/components/ItemList/Item.vue';

import Repository from '@/clients/RepositoryFactory';

const GetRepository = Repository.get("item");

export default {
  name: 'ItemListPage',
  components: {
    Header,
    Footer,
    ItemList,
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
      this.productList = data;
    },
  },
};
</script>
