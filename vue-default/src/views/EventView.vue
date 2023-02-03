<template>
  <div>
    <button type="button" @:click="one(), two()">
      동시에 두개 메소드 호출
    </button>
    <button type="button" @:click="increaseCounter">Add 1</button>
    <p>The count is : {{ counter }}</p>
    <br />
    <select v-model="city" @change="changeSelect">
      <option :value="city.t" :key="i" v-for="(city, i) in options">
        {{ city.t }}
      </option>
    </select>
    <br />
    <br />
    <input type="text" v-model="textValue" @keyup.enter="showValue" />
  </div>
</template>

<script>
export default {
  setup() {},
  data() {
    return {
      counter: 0,
      options: [
        { v: "02", t: "서울" },
        { v: "21", t: "부산" },
        { v: "064", t: "제주" },
      ],
      city: "제주",
      textValue: "",
    };
  },
  methods: {
    increaseCounter() {
      this.counter = this.counter + 1;
    },
    one() {
      alert("one");
    },
    two() {
      alert("two");
    },
    changeSelect() {
      alert(this.city);
    },
    showValue() {
      //tab, delete, esc, space, up, down, left, right
      alert(this.textValue);
    },
  },
};
</script>
