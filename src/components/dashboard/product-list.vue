<template>
 <div class="container m-auto">
    <div class="row">
      <div class="col">

        <table class="table">
          <thead class="">
            <th class="" width:150>圖片</th>
            <th class="">名稱</th>
            <th class="">原價</th>
            <th class="">售價</th>
            <th class="">是否啟用</th>
          </thead>
          <tbody class="">
            <template v-for="item in AdminProductList.data" :key="item.id">
              <tr class="">
                <td class="img-block"><img :src='item.imageUrl' alt=""></td>
                <td class="">{{item.title}}</td>
                <td>{{item.origin_price}}</td>
                <td>{{item.price}}</td>
                <td>{{item.is_enabled?'已啟用':'未啟用'}}</td>
              </tr>
            </template>
          </tbody>
        </table>

      </div>
    </div>

    <div class="row">
        <div class="col">
            <pagenation :PageData="AdminPagination" @out_getdata="AdminGetProductList"></pagenation>
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
import pagenation from '@/components/common/pagination.vue';

export default {
  components: {
    pagenation,
  },
  setup() {
    // 存商品列表
    const AdminProductList = reactive({
      data: [],
    });
      // 存頁碼
    const AdminPagination = reactive({
      data: {},
    });
    // 取得後台商品列表的API
    const AdminGetProductList = (page = 1) => {
      axios.get(`${process.env.VUE_APP_ALL_APIPATH}/admin/products?page=${page}`).then((res) => {
        if (res.data.success) {
          AdminProductList.data = res.data.products;
          AdminPagination.data = res.data.pagination;
        } else {
          alert(res.data.message);
        }
      }).catch((err) => {
        alert(err.message);
      });
    };

    onMounted(() => {
      AdminGetProductList();
    });
    return {
      AdminProductList,
      AdminPagination,
      AdminGetProductList,
    };
  },

};

</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
}

  img {
    max-width: 100%;
    height: auto;
  }

  .img-block {
    width: 300px;
  }

</style>
