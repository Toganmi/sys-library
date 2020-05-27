<template>
  <div class="top-container">
    <van-nav-bar
  title="中大新华"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
  </div>
</template>

<script>
import { Toast } from 'vant';

export default {
  name: "top",
  components: {},
  data() {
    return {
};
  },
  methods: {
     onClickLeft() {
       if(this.$route.path!=="/discovery"){
       this.long =  this.$router.go(-1);
     }
      
  },
  },

};
</script>

<style scoped>
  .top-container{
    height: 46px;
  }
</style>
