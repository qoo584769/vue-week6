<template>
  <div class="container m-auto">
      <Form v-slot="{ errors }" @submit="CheckOut">
        <label for="name">姓名</label>
        <Field id="name" name="姓名" type="text" class="form-control"
          :class="{ 'is-invalid': errors['姓名'] }" placeholder="請輸入 姓名" rules="required"
          v-model="UserData.data.user.name"></Field>
        <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        <label for="email">Email</label>
        <Field id="email" name="email" type="email" class="form-control"
          :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="email|required"
          v-model="UserData.data.user.email"></Field>
        <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        <label for="tel">電話</label>
        <Field id="tel" name="電話" type="tel" class="form-control"
          :class="{ 'is-invalid': errors['電話'] }" placeholder="請輸入 電話" :rules="ValidateTel"
          v-model="UserData.data.user.tel"></Field>
        <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        <label for="address">地址</label>
        <Field id="address" name="地址" type="text" class="form-control"
          :class="{ 'is-invalid': errors['地址'] }" placeholder="請輸入 地址" rules="required"
          v-model="UserData.data.user.address"></Field>
        <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        <p>
          <label for="message">備註</label>
          <textarea id="message" v-model="UserData.data.message"></textarea>
        </p>
        <button type="submit" class="btn btn-primary" @submit.prevent="CheckOut">
          <!-- <i class="fas fa-spinner fa-pulse" v-if="statusid.checkout"></i> -->
          建立訂單
        </button>
      </Form>
  </div>
</template>

<script>
import {
  onMounted,
  reactive,
} from '@vue/runtime-core';
import axios from 'axios';
import {
  useRouter,
} from 'vue-router';

export default {

  components: {

  },

  setup() {
    const router = useRouter();
    //   使用者資料
    const UserData = reactive({
      data: {
        user: {},
        message: '',
      },
    });
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
      // 結帳付款
    const CheckOut = () => {
      if (CartData.data.carts.length !== 0) {
        // isloading.value = true;
        axios.post(`${process.env.VUE_APP_ALL_APIPATH}/order`, UserData)
          .then((res) => {
            if (res.data.success) {
            //   statusid.checkout = false;
            //   isloading.value = false;
              alert(res.data.message);
              router.push({ name: 'all-product' });
              return;
            }
            alert(res.data.message);
          })
          .catch((err) => {
            // statusid.checkout = false;
            alert(err.message);
          });
      } else {
        // statusid.checkout = false;
        alert('購物車無商品');
      }
    };

    // 驗證手機的函式
    const ValidateTel = (value) => {
      if (!value) {
        return '電話號碼為必填';
      }
      if (!/^09\d{8}$/.test(value)) {
        return '電話號碼格式錯誤';
      }
      return true;
    };

    onMounted(() => {
      GetCartList();
    });

    return {
      UserData,
      CheckOut,
      ValidateTel,
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
