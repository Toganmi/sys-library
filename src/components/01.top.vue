<template>
  <div class="top-container">
    <van-nav-bar
            :title="title"
            :left-arrow="isLeft"
            @click-left="onClickLeft"
    />
  </div>
</template>

<script>
  import {Toast} from 'vant';

  export default {
    name: "top",
    components: {},
    data() {
      return {
        head: '图书馆'
      };
    },

    computed: {
      title() {
        return this.$store.getters.headTitle || this.head
      },
      isLeft() {
        return this.$store.getters.headLeft
      }
    },
    methods: {
      onClickLeft() {
        if (this.$route.path !== "/discovery") {
          this.long = this.$router.go(-1);
        }
        this.$store.dispatch('setTitle', '我的')
      },
    },

  };
</script>

<style scoped>
  .top-container {
    height: 46px;
  }
</style>
