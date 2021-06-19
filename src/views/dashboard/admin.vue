<template>
  <div>
    後台
    <router-link :to="{name:'product-list'}" class="btn btn-primary m-2">後台產品列表</router-link>
    <router-link :to="{name:'AdminOrder'}" class="btn btn-primary m-2">後台訂單</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    // 進入畫面初始化用
    const init = () => {
      const token = document.cookie.replace(
        // eslint-disable-next-line no-useless-escape
        /(?:(?:^|.*;\s*)henToken\s*\=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      console.log(token);
      axios.defaults.headers.common.Authorization = token;
      axios.post(`${process.env.VUE_APP_APIPATH}/api/user/check`).then((res) => {
        if (res.data.success) {
          router.push({ name: 'product-list' });
        } else {
          alert(res.data.message);
          router.push({ name: 'login' });
        }
      }).catch((err) => {
        alert(err.message);
      });
    };
    onMounted(() => {
      init();
    });
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
