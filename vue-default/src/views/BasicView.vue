<template>
  <div>
    <h1>{{ title }}</h1>
    <input type="text" v-model="title" />
  </div>
</template>
<script>
export default {
  titleName: "",
  components: {},
  data() {
    return {
      title: "타이틀~~",
    };
  },
  setup() {},
  create() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
<style scoped></style>
