<template>
  <div id="item-list-page" ref="itemListPage">
    <div
      v-for="(item, index) in productList"
      :key="index"
      class="product-list"
      @click="goToDetail(item)"
      data-test="productList"
    >
      <Item
        :item="item"
      />
    </div>

    <div style="clear: both;"></div>
  </div>
</template>

<script>
import Item from '@/components/ItemList/Item.vue';
import Repository from '@/clients/RepositoryFactory';

const GetRepository = Repository.get("get");

export default {
  name: 'ItemListPage',
  components: {
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
  },
};
</script>

<style scoped>
</style>
