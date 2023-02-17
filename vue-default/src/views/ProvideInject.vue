<template>
  <div>
<!--    <ProvideInjectChild :itemLength="items.length"/>-->
    <ProvideInjectChild />
  </div>
</template>

<script>
import ProvideInjectChild from "./ProvideInjectChild.vue";
export default {
  components : {ProvideInjectChild},
  data() {
    return {
      items : ["A", "B"],
    }
  },
  provide() {
    return {
      itemLength: this.items.length,
      items: this.items,
    };
  }
};
</script>