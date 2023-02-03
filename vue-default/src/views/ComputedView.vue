<template>
  <div>
    <input type="text" v-model="lastName" />
    <input type="text" v-model="firstName" />
    <h1>Hello, {{ fullName }}</h1>
    <h1>Hello, {{ fullName }}</h1>
    <h1>Hello, {{ fullName }}</h1>
    <h1>Hello, {{ fullName }}</h1>
  </div>
</template>

<script>
export default {
  setup() {},
  data() {
    return {
      firstName: "재석",
      lastName: "유",
    };
  },
  computed: {
    fullName() {
      return this.lastName + this.firstName;
    },
  },
  methods: {
    getFullName() {
      return this.lastName + this.firstName;
    },
  },
};
</script>
