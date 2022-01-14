<template>
  <div id='product-info-page'>
    <div>{{ productInfo }}</div>
    <fa icon="arrow-up" />
  </div>
</template>

<script>
export default {
  name: 'ProductInfoPage',
  props: {
    productInfo: Object,
  },
  data() {
    return {

    };
  },
  methods: {

  },
  computed: {

  },
};
</script>
