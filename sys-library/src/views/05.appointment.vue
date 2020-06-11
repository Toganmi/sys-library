<template>
  <div class="Vappointment">
    <div class="items">
<<<<<<< HEAD
      <div class="item" v-for="(item,index) in appointmentlist" :key="index">
        <van-card>
          <template #title>时间段:{{item.time}}<br></template>
          <template #tags>图书馆号:{{item.build}}</template>
          <template #num>预约状态:{{item.status}}</template>
=======
      <div class="item" v-for="(item,index) in 10" :key="index">
        <van-card >
          <template #title>时间段:{{time}}<br></template>
          <template #tags>图书馆号:{{nums}}</template>
          <template #num>预约状态:{{type}}</template>
>>>>>>> 2e5245f64712e129abcf89b268d3cd1a00d1b32f
        </van-card>
      </div>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
  import {getappointmentlist} from "../network/appointment";

  export default {
    data() {
      return {
        appointmentlist:[]
      };
    },
    created() {
      this.$store.dispatch('setHeadLeft', true)
      this.getappointmentlist(this.$store.getters.name)
    },
    destroyed() {
      this.$store.dispatch('setHeadLeft', false)
    },

    methods: {
      getappointmentlist(id) {
        getappointmentlist(id).then(res => {
          console.log(res);
          this.appointmentlist = res

        })
      }

    }

  };
</script>

<style>
  .van-card__content {
    background-color: rgb(250, 250, 250);
    font-size: 16px;
    border-radius: 14px;
  }

  .van-card {
    background-color: rgb(255, 255, 255);
  }

  .index-container .main {
    background-color: rgb(255, 255, 255);
  }
=======
export default {
  data() {
    return {
      time: "12.23.43",
      type:"成功",
      nums:"1号"
    };
  }
};
</script>

<style>
.van-card__content{
    background-color: #F5F5F5;
    font-size: 16px;
}
>>>>>>> 2e5245f64712e129abcf89b268d3cd1a00d1b32f
</style>