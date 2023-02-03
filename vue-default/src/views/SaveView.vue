<template>
  <div>
    <input type="text" v-model="userInfo.name" />
    <input type="text" v-model.number="userInfo.age" />
    <input type="text" v-model="userInfo.job" />
    <button type="button" @click="saveUserInfo">저장</button>
  </div>
</template>

<script>
export default {
  setup() {},
  data() {
    return {
      userInfo: {
        name: "",
        age: 0,
        job: "",
      },
    };
  },
  methods: {
    saveUserInfo() {
      if (this.userInfo.name == "") {
        //return alert("사용자 이름을 입력하세요");
        return this.$swal("사용자 이름을 입력하세요");
      }
      if (this.userInfo.age == 0) {
        //return alert("사용자 나이를 입력하세요");
        return this.$swal("사용자 나이를 입력하세요");
      }
      if (this.userInfo.job == "") {
        //return alert("사용자 직업을 입력하세요");
        return this.$swal("사용자 직업을 입력하세요");
      }
      // const params = {
      //   name: this.userInfo.name,
      //   age: this.age,
      //   job: this.job,
      // };
      const res = this.saveData(this.userInfo);
      if (res == "s") {
        alert("저장되었습니다");
      }
    },
    saveData(params) {
      console.log(params);
      const r = "s";
      return r;
    },
  },
};
</script>
