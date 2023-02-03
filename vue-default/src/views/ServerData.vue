<template>
  <div>
    <button type="button" @click="getProductList">조회</button>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>제품가격</th>
          <th>배송비</th>
          <th>제품카테고리</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(product, i) in productList">
          <td>{{ product.product_name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.delivery_price }}</td>
          <td>{{ product.category }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      productList: [],
    };
  },
  methods: {
    async getProductList() {
      let url =
        "https://1a5eb725-7e11-4062-bf2d-c6eda1370895.mock.pstmn.io/productList";
      this.productList = await this.api(url, "get", {});
      console.log(this.productList);
    },
    async api(url, method, data) {
      return (
        await axios({
          method: method,
          url: url,
          data: data,
        }).catch((e) => {
          console.log(e);
        })
      ).data;
    },
  },
};
</script>
