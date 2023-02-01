<template>
  <div>
    <input type="text" v-model="valueModel" />
    <input type="number" v-model.number="valueModel2" />
    <textarea v-model="valueModel3"></textarea>
    <div>{{ valueModel3 }}</div>

    <select v-model="city">
      <option value="02">서울</option>
      <option value="21">부산</option>
      <option value="064">제주</option>
    </select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      valueModel: "한국",
      valueModel2: 12,
      valueModel3: "룰루랄라라",
      city: "21",
    };
  },
  mounted() {
    console.log(this.valueModel2);
  },
};
</script>
