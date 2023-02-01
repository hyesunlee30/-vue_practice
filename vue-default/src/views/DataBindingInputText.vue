<template>
  <div>{{ valueModel }}</div>
  <input type="text" v-model="valueModel" />
</template>
<script>
export default {
  data() {
    return {
      valueModel: "한국",
    };
  },
};
</script>
