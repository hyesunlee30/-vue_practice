<template>
  <div>
    <input type="text" v-model.number="x1" />
    <input type="text" v-model.number="x2" />
    <!-- <button type="button" @click="plusNumber">계산</button> -->
    <input type="text" v-model.number="y" />
  </div>
</template>

<script>
export default {
  setup() {},
  data() {
    return {
      x1: 0,
      x2: 0,
      //y: 0,
    };
  },
  //   watch: {
  //     x1() {
  //       this.y = this.x1 + this.x2;
  //     },
  //     x2() {
  //       this.y = this.x1 + this.x2;
  //     },
  //   },
  computed: {
    y() {
      return this.x1 + this.x2;
    },
  },
  methods: {
    plusNumber() {
      return (this.y = this.x1 + this.x2);
    },
  },
};
</script>
