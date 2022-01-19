<template>
  <div class="item-list-header">
    <div class="header-section">
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
};
</script>

<style scoped>
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
