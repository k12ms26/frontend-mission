<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <input v-model="input" />
      <button @click="onSubmit" class="button-style">제출</button>
      <button @click="openAlert" class="button-style">알림</button>
    </div>
    <div class="input-style">
      <span>{{ input }}</span>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup() {
    const state = reactive({
      input: '',
      count: 0,
    });

    const methods = reactive({
      onSubmit: () => {
        const first = state.input.substring(0, 1);
        const rest = state.input.substring(1, state.input.length);
        state.input = rest + first;
      },
      openAlert: () => {
        state.count += 1;
        alert(`${state.input} ${state.count}`);
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.button-style {
  margin-left: 5px;
}

.input-style {
  margin-top: 15px;
  font-size: 16px;
}
</style>
