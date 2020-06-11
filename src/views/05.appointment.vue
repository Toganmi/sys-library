<template>
  <div class="Vappointment">
    <div class="items">
      <div class="item" v-for="(item,index) in appointmentlist" :key="index">
        <van-card>
          <template #title>时间段:{{item.time}}<br></template>
          <template #tags>图书馆号:{{item.build}}</template>
          <template #num>预约状态:{{item.status}}</template>
        </van-card>
      </div>
    </div>
  </div>
</template>

<script>
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
</style>