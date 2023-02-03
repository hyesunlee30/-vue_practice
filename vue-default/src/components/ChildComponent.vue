<template>
  <div>
    <h1>{{ msg }}</h1>
    <button type="button" @click="sendFromChild">
      자식 컴포넌트에서 부모 컴포넌트로 이벤트 전달하기
    </button>
    <button type="button" @click="changeData">자식 컴포넌트 데이터 변경</button>
    <div>likes : {{ likes }}</div>
    <div>isOk : {{ isOk }}</div>
    <div>commentIds : {{ commentIds }}</div>
    <div>author name: {{ author.name }}</div>
    <button type="button" @click="childFunc" ref="child_btn">자식 클릭</button>
  </div>
</template>
<script>
export default {
  props: {
    likes: {
      type: Number,
      default: 0,
    },
    isOk: {
      type: Boolean,
      defualt: false,
    },
    commentIds: {
      type: Array,
    },
    author: {
      type: Object,
    },
  },
  mounted() {},
  methods: {
    childFunc() {
      alert("부모 컴포넌트에서 직접 발생시킨");
    },
    sendFromChild() {
      this.$emit("send-message", this.msg2);
    },
    changeData() {
      this.msg3 = "자식 컴포넌트에서 데이터 변경이 일어났습니다";
    },
  },
  data() {
    return {
      msg: "자식에 있던 메시지",
      msg2: "자식 컴포넌트로 부터 보내는 메시지",
      msg3: "자식 메시지3",
    };
  },
};
</script>
