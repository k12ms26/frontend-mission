<template>
  <div id="item-list-page" ref="itemListPage">
    <Header
      ref="header"
      @scrollHandler="scrollHandler"
    />

    <ItemList
      :productList="productList"
      @goToDetail="goToDetail"
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
    scrollHandler() {
      window.onscroll = () => {
        const currentScrollPos = window.pageYOffset;
        const el = this.$refs.header.$refs.itemListHeader;
        if (currentScrollPos === 0) {
          el.style.top = "0";
          // document.getElementById("item-list-header").style.top = "0";
        } else {
          el.style.top = "-20%";
          // document.getElementById("item-list-header").style.top = "-60px";
        }
      };
    },
    goToDetail(productNo) {
      this.$router.push(`/items/${productNo}`);
    },
  },
};
</script>
