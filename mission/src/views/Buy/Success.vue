<template>
  <div class="success">
    <div class="success-title">
      <font-awesome-icon
        icon="check-circle"
        class="icon"
      />
      주문이 완료되었습니다.
    </div>

    <router-link to="/">
      <div class="footer success-footer" data-test="backButton">
          메인 화면으로 돌아가기
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.success {
  margin-top: 45%;
}

.success a {
  text-decoration: none;
}

.success-title {
  text-align: center;
  font-size: 20px;
  margin-bottom: 5%;
}

.success-footer {
  position: inherit !important;
}
</style>
