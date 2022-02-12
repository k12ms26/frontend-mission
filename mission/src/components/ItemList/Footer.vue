<template>
  <div class="item-list-footer">
    <div>
      <router-link to="/">
        <font-awesome-icon
          icon="home"
          class="footer-icon"
          data-test="homeIcon"
        />
      </router-link>
      <font-awesome-icon
        icon="heart"
        class="footer-icon"
        data-test="likeIcon"
      />
      <router-link to="/cart">
        <font-awesome-icon
          icon="shopping-cart"
          class="footer-icon"
          data-test="cartIcon"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.item-list-footer {
  position: fixed;
  bottom: 0;
  background-color: whitesmoke;
  width: 100%;
  padding: 12px 0;
}

.footer-icon {
  width: 33%;
  font-size: 20px;
  color: darksalmon;
}
</style>
