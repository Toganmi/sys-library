<template>
  <div>
    <div class="box"></div>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" @change="onChange">
      <van-swipe-item v-for="(item, index) in swiperUrl" :key="index">
        <img :src="item" alt="">
      </van-swipe-item>
    </van-swipe>
    <div class="discovery-container">
      <!-- 每日精读 -->
      <div class="recommend">
        <h3 class="title">每日精读</h3>
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <!--<van-cell class="wrap" v-for="(item, index) in list" :key="index" :title="item"/>-->
          <div class="wrap" v-for="(item, index) in list" :key="index">
            <div class="left">
              <img mode="aspectFill" :src="item.url" alt=""/>
            </div>
            <div class="right">
              <div class="name">{{item.bookname}}</div>
              <div>{{item.auther}}</div>

            </div>
          </div>
        </van-list>
      </div>
      <!-- 座位预约 -->
    </div>
  </div>
</template>

<script>
  import {getHomeMultidata} from "../network/home";

  export default {
    name: "discovery",
    methods: {
      onChange(index) {
        // console.log("当前 Swipe 索引：" + index);
      },
      onLoad() {
        // 异步更新数据
        this.getHomeMultidata()

        this.loading = false;

        this.finished = true;

      },

      /**
       * 网络请求相关方法
       */

      getHomeMultidata() {
        getHomeMultidata().then(res => {
          console.log(res);
          this.list = res.bookList
          this.swiperUrl = res.swiper
        })
      }
    },
    data() {
      return {
        list: [],
        loading: false,
        finished: false,
        swiperUrl: []
      }
    }
  };
</script>

<style>
  .box {
    height: 10px;
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    height: 150px;
    width: 100%;

    /*background-image: url("../assets/banner.jpg");*/
  }

  .my-swipe img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    border-radius: 10px;
  }





  .wrap {
    display: flex;
    border-bottom: 1px solid #C8C7CC;
    padding: 10px 10px;
  }

  .left {
    width: 100px;
    height: 120px;
  }

  .left img {
    width: 100%;
    height: 100%;
  }


  .right {
    flex: 1;
    margin-left: 20px;
  }

  .name {
    font-size: 15px;
    color: black;
  }


</style>
