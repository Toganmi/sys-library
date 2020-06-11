<template>
  <div class="top-container">
    <van-nav-bar
<<<<<<< HEAD
            :title="title"
            :left-arrow="isLeft"
            @click-left="onClickLeft"
    />
=======
  title="中大新华"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
>>>>>>> 2e5245f64712e129abcf89b268d3cd1a00d1b32f
  </div>
</template>

<script>
<<<<<<< HEAD
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
=======
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
>>>>>>> 2e5245f64712e129abcf89b268d3cd1a00d1b32f
    height: 46px;
  }
</style>
