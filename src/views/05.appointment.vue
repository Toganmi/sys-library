<template>
  <div class="Vappointment">
    <div class="items">
      <div class="item" v-for="(item,index) in 10" :key="index">
        <van-card >
          <template #title>时间段:{{time}}<br></template>
          <template #tags>图书馆号:{{nums}}</template>
          <template #num>预约状态:{{type}}</template>
        </van-card>
      </div>
    </div>
  </div>
</template>

<script>
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
</style>