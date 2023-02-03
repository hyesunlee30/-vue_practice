<template>
  <div>
    <h1 v-if="type == 'A'">A</h1>
    <h1 v-else-if="type == 'B'">B</h1>
    <h1 v-else>Other</h1>
    <br />
    <h1 v-show="bRender">show1</h1>
    // 일단 그려지고 안 보이게 display none
  </div>
</template>

<script>
export default {
  setup() {},
  data() {
    return {
      type: "C",
      bRender: false,
    };
  },
};
</script>
