<template>
  <div class="container m-auto">
    <button class="btn btn-danger m-2" @click.prevent="DelAllItem">移除全部品項</button>
    <div class="row">
      <div class="col">

        <table class="table">
          <thead class="">
            <th class="">名稱</th>
            <th class="">價格</th>
            <th>移除品項</th>
          </thead>
          <tbody class="">
            <template v-for="item in CartData.data.carts" :key="item.id">
              <tr class="">
                <td class="">{{item.product.title}}</td>
                <td class="">{{item.product.price}} / {{item.product.unit}}</td>
                <td class="">
                  <button type="button" class="btn btn-danger"
                    @click.prevent="DelSingleItem(item.id)">移除品項</button>
                </td>
              </tr>
            </template>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-end">總計 : {{CartData.data.final_total}}</td>
            </tr>
          </tfoot>
        </table>

        <button type="button" class="btn btn-secondary" @click.prevent="PushToOrder">送出訂單</button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  onMounted,
  reactive,
} from '@vue/runtime-core';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {

  setup() {
    const router = useRouter();
    //   購物車API參數
    const CartData = reactive({
      data: {},
    });
      //   取得購物車列表
    const GetCartList = () => {
      axios.get(`${process.env.VUE_APP_ALL_APIPATH}/cart`).then((res) => {
        if (res.data.success) {
          CartData.data = res.data.data;
        } else {
          alert(res.data.message);
        }
      }).catch((err) => {
        alert(err.message);
      });
    };
      // 移除單一品項
    const DelSingleItem = (id) => {
      axios.delete(`${process.env.VUE_APP_ALL_APIPATH}/cart/${id}`).then((res) => {
        if (res.data.success) {
          GetCartList();
          alert(res.data.message);
        } else {
          alert(res.data.message);
        }
      }).catch((err) => {
        alert(err.message);
      });
    };
      // 移除全部品項
    const DelAllItem = () => {
      axios.delete(`${process.env.VUE_APP_ALL_APIPATH}/carts`).then((res) => {
        if (res.data.success) {
          GetCartList();
          alert(res.data.message);
        } else {
          alert(res.data.message);
        }
      }).catch((err) => {
        alert(err.message);
      });
    };
    // 跳轉到訂單頁面
    const PushToOrder = () => {
      router.push({ name: 'CustomerOrder' });
    };
    onMounted(() => {
      GetCartList();
    });
    return {
      CartData,
      DelSingleItem,
      DelAllItem,
      PushToOrder,
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
