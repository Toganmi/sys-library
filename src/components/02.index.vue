<template>
  <div class="index-container">
    <!-- <div class="nav" >
      <ul>
        <li>
          <router-link to="/discovery">
            <span class="iconfont icon-find-music"></span>
            发现音乐
          </router-link>
        </li>
        <li>
          <router-link to="/playlists">
            <span class="iconfont icon-music-list"></span>
            推荐歌单
          </router-link>
        </li>
        <li>
          <router-link to="/songs">
            <span class="iconfont icon-music"></span>
            最新音乐
          </router-link>
        </li>
        <li>
          <router-link to="/mvs">
            <span class="iconfont icon-mv"></span>
            最新MV
          </router-link>
        </li>
      </ul>
    </div>-->
    <div class="main">
      <router-view/>
    </div>
    <div class="tabbar">
      <van-tabbar v-model="active">
        <van-tabbar-item name="home" @click="changeTitle('每日精读','/discovery')" icon="home-o">
          <div>每日精读</div>
        </van-tabbar-item>
        <van-tabbar-item name="friends" @click="changeTitle('座位预约', 'reservation')" icon="friends-o">
          <div>座位预约</div>
        </van-tabbar-item>
        <van-tabbar-item name="setting" @click="changeTitle('我的', 'mine')" icon="contact">
          <div>我的</div>
          <!-- <van-cell id="van-cell" @click="showPopup">我的</van-cell> -->
          <!-- <van-popup close-icon v-model="show" position="bottom" :style="{ height: '180px' }">
            <van-grid clickable :column-num="2">
              <van-grid-item icon="home-o" text="个人信息" to="/pinfo"/>
              <van-grid-item icon="home-o" text="我的预约" to="/appointment"/>
              <van-grid-item icon="home-o" text="登录" to="/login"/>
              <van-grid-item icon="home-o" text="注册" to="/register"/>
            </van-grid>
          </van-popup>-->
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      active: "home",
      show: false
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    },
    changeTitle(title,link) {
      this.$store.dispatch('setTitle', title)
      this.$router.push(link)
    }
  }
};
</script>

<style>
#van-cell {
  padding: 0;
  font-size: 12px;
  line-height: 14px;
}

.van-tabbar-item__icon {
  margin-bottom: 0;
}
</style>
