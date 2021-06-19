<template>
     <div class="container m-auto">
        <form action="" class="login-form" @submit.prevent="login">
            <label for="account">帳號</label>
            <input type="email" id="account" v-model="data.username" />

            <label for="password">密碼</label>
            <input type="password" id="password" v-model="data.password" />

            <br />

            <input type="submit" value="登入" id="btn_login" />
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import {
  reactive,
} from '@vue/runtime-core';
import { useRouter } from 'vue-router';

export default {

  setup() {
    const data = reactive({
      username: '',
      password: '',
    });

    const router = useRouter();
    const login = () => {
      if (data.username !== '' && data.password !== '') {
        axios.post(`${process.env.VUE_APP_APIPATH}/admin/signin`, data)
          .then((res) => {
            if (res.data.success) {
              const {
                token,
                expired,
              } = res.data;
              document.cookie = `henToken=${token};expires=${new Date(expired)}`;
              console.log(document.cookie);
              router.push({ name: 'Admin' });
            } else {
              alert(`${res.data.message}`);
            }
          })
          .catch((err) => {
            alert(err.message);
          });
      } else {
        alert('帳號密碼為必填');
      }
    };

    return {
      data,
      login,
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

</style>
