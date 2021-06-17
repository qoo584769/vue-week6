<template>
  <div class="container m-auto">
    <div class="row">
      <div class="col">

        <table class="table">
          <thead class="">
            <th class="" width:150>圖片</th>
            <th class="">名稱</th>
            <th class="">價格</th>
            <th class="">查看更多</th>
            <th class="">加到購物車</th>
          </thead>
          <tbody class="">
            <template v-for="item in ProductList.data" :key="item.id">
              <tr class="">
                <td class="img-block"><img :src='item.imageUrl' alt=""></td>
                <td class="">{{item.title}}</td>
                <td class="">
                  <span v-if="!item.price">價格 : {{item.origin_price}}</span>
                  <span v-if="item.price" class="text-decoration-line-through">折價前 :
                    {{item.origin_price}}</span>
                  <br>
                  <span v-if="item.price">折價後 : {{item.price}}</span>
                </td>
                <td class="">
                  <router-link :to="{ name: 'detail', params: { id: `${item.id}` }}"
                    class="btn btn-secondary">查看更多</router-link>
                </td>
                <td class=""><button class="btn btn-primary"
                    @click.prevent="AddToCart(item.id)">加入購物車</button></td>
              </tr>
            </template>
          </tbody>
        </table>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {
  onMounted,
  reactive,
} from '@vue/runtime-core';

export default {
  components: {},
  setup() {
    // 存商品列表
    const ProductList = reactive({
      data: [],
    });
      // 存頁碼
    const Pagination = reactive({
      data: {},
    });
      // 加入購物車參數
    const CartData = reactive({
      data: {
        product_id: '',
        qty: 1,
      },
    });
      // 取得商品列表的API
    const GetProductList = (page = 1) => {
      axios.get(`${process.env.VUE_APP_ALL_APIPATH}/products?page=${page}`).then((res) => {
        if (res.data.success) {
          ProductList.data = res.data.products;
          Pagination.data = res.data.pagination;
        } else {
          alert(res.data.message);
        }
      }).catch((err) => {
        alert(err.message);
      });
    };
      // 加入購物車
    const AddToCart = (id) => {
      CartData.data.product_id = id;
      axios.post(`${process.env.VUE_APP_ALL_APIPATH}/cart`, CartData).then((res) => {
        if (res.data.success) {
          alert(res.data.message);
        } else {
          alert(res.data.message);
        }
      }).catch((err) => {
        alert(err.message);
      });
    };
    onMounted(() => {
      GetProductList();
    });
    return {
      ProductList,
      CartData,
      AddToCart,
    };
  },
};

</script>

<style lang="scss" scoped>
  img {
    max-width: 100%;
    height: auto;
  }

  .img-block {
    width: 300px;
  }

</style>
