<template>
  <div class="container m-auto">
    <table class="table">
      <thead class="">
        <th class="" width="100">建立日期</th>
        <th class="" width="100">訂單ID</th>
        <!-- <th class="" width="100">訂單商品</th> -->
        <!-- <th class="" width="100">訂購人</th> -->
        <th class="" width="100">數量</th>
        <th class="" width="100">訂單價格</th>
        <th class="" width="100">是否付款</th>
      </thead>
      <tbody class="">
        <template v-for="item in AdminOrderList.data" :key="item.id">
          <tr class="">
            <td class="">{{item.create_at}}</td>
            <td class="">{{item.id}}</td>
            <!-- <td class="">{{item.products}}</td> -->
            <!-- <td class="">{{item.user}}</td> -->
            <td class="">{{item.num}}</td>
            <td class="">{{item.total}}</td>
            <td class="" :class="{'text-success':item.is_paid,'text-danger':!item.is_paid}">
              {{item.is_paid?'是':'否'}}</td>
          </tr>
        </template>
      </tbody>
    </table>

    <pagenation :PageData="AdminOrderPagination" @out_getdata="AdminGetOrderList"></pagenation>
  </div>
</template>

<script>
import axios from 'axios';
import {
  reactive,
} from '@vue/reactivity';
import {
  onMounted,
} from '@vue/runtime-core';
import pagenation from '@/components/common/pagination.vue';

export default {
  components: {
    pagenation,
  },
  setup() {
    // 存商品列表
    const AdminOrderList = reactive({
      data: [],
    });
      // 存頁碼
    const AdminOrderPagination = reactive({
      data: {},
    });
      // 取得後台訂單列表的API
    const AdminGetOrderList = (page = 1) => {
      axios.get(`${process.env.VUE_APP_ALL_APIPATH}/admin/orders?page=${page}`).then((
        res,
      ) => {
        if (res.data.success) {
          AdminOrderList.data = res.data.orders;
          AdminOrderPagination.data = res.data.pagination;
        } else {
          alert(res.data.message);
        }
      }).catch((err) => {
        alert(err.message);
      });
    };
    onMounted(() => {
      AdminGetOrderList();
    });
    return {
      AdminOrderList,
      AdminOrderPagination,
      AdminGetOrderList,
    };
  },

};

</script>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
  }

</style>
