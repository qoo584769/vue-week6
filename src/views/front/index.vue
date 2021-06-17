<template>
  <div>首頁</div>
  <router-link :to="{name:'all-product'}" class="btn btn-primary me-1 p-1">所有商品</router-link>
  <router-link :to="{name:'cart'}" class="btn btn-primary me-1 p-1">購物車</router-link>
  <router-view></router-view>
</template>

<script>

export default {
  setup() {
    return {
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
