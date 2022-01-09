<template>
  <div>
    <div>
      <input v-model="rotateString" />
      <button @click="rotate" class="button-style">제출</button>
      <button @click="openAlert" class="button-style">알림</button>
    </div>
    <div class="input-string-style">
      <span data-test="rotate-string">{{ rotateString }}</span>
    </div>
    <dialog id="alert-dialog">
      <div>{{ rotateString }} {{ count }}</div>
      <button @click="closeAlert" class="close-button">확인</button>
    </dialog>
  </div>
</template>

<script>
import {
  reactive,
  toRefs,
} from 'vue';

export default {
  name: 'StringItem',
  setup() {
    const state = reactive({
      rotateString: '',
      count: 0,
      open: false,
    });

    const methods = reactive({
      rotate: () => {
        const first = state.rotateString.substring(0, 1);
        const rest = state.rotateString.substring(1);
        state.rotateString = rest + first;
      },
      openAlert: () => {
        state.count += 1;
        state.open = true;
        const alertDialog = document.getElementById('alert-dialog');
        alertDialog.showModal();
      },
      closeAlert: () => {
        const alertDialog = document.getElementById('alert-dialog');
        alertDialog.close();
      },
    });

    return {
      ...toRefs(state),
      ...toRefs(methods),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button-style {
  margin-left: 5px;
}

.input-string-style {
  margin-top: 15px;
  font-size: 16px;
}

#alert-dialog {
  width: 400px;
  height: 45px;
  border: 1px solid black;
}

.close-button {
  position: absolute;
  right: 35px;
}
</style>
