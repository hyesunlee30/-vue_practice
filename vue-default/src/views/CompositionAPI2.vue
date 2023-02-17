<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model.number="state.num1" />
      <span> + </span>
      <input type="text" v-model.number="state.num2" />
      <span> = </span>
      <span> {{state.result}} </span>
    </div>
  </div>
</template>
<script>
import {reactive, computed} from 'vue';
export default {
  name: 'calculatorView',
  setup() {
    let state = reactive({ // reactive를 이용해서 num1, num2,result를 실시간 반응 적용
      num1 : 0,
      num2: 0,
      result: computed(() => state.num1 + state.num2),
    });

    return {state};
  },
  // data() {
  //   return {
  //     num1: 0,
  //     num2: 0,
  //     result: 0
  //   }
  // },
  // methods: {
  //   plusNumbers() {
  //     this.result = this.num1 + this.num2;
  //   }
  // }
}
</script>