<template>
  <div class="Vmine">
    <div class="Mtop">
      <van-row>
        <van-col span="22" offset="2">
          <span class="Mtitle">
            <strong v-if="!isLogin">登录后有新天地</strong>
            <strong v-else>欢迎你，{{isLogin}}</strong>
          </span>
        </van-col>
        <van-col span="22" offset="2">记得佩戴口罩噢！</van-col>
      </van-row>
      <van-row v-if="!isLogin" type="flex" justify="space-around" class="Mbutton">
        <van-col span="8">
          <router-link to="register">
            <van-button class="Mbtn" type="default">注册</van-button>
          </router-link>
        </van-col>
        <van-col span="8">
          <router-link to="login">
            <van-button class="Mbtn" type="info">登录</van-button>
          </router-link>
        </van-col>
      </van-row>
      <van-row v-else type="flex" justify="space-around" class="Mbutton">
        <van-col span="8">
            <van-button class="Mbtn" @click="logOut" type="default">退出登录</van-button>
        </van-col>
      </van-row>
    </div>
    <div class="Mnotice">
      <van-notice-bar left-icon="volume-o" color="#1989fa" background="#ecf9ff">请同学们有序进入图书馆！！！</van-notice-bar>
    </div>
    <div class="Mnav">
      <router-link to="appointment">
        <van-cell is-link @click="showPopup('我的预约')">我的预约</van-cell>
      </router-link>
      <router-link to="pinfo">
        <van-cell is-link @click="showPopup('我的信息')">我的信息</van-cell>
      </router-link>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  computed: {
    isLogin() {
      return this.$store.getters.name
    }
  },
  methods: {
    showPopup(title) {
      this.show = true;
      this.$store.dispatch('setTitle', title)
    },
    logOut() {
      this.$store.dispatch('setName', null)
      localStorage.removeItem('name')

    }
  }
};
</script>

<style>
.Vmine {
  font-family: Helvetica, sans-serif;
}
.Vmine .Mtop {
  width: 100%;
  height: 150px;
  font-size: 14px;
}
.Vmine .Mtop .Mtitle {
  font-size: 20px;
}
.Vmine .Mtop .Mbutton {
  margin: 10px;
}
.Vmine .Mnotice {
  width: 100%;
  margin: 10px 0px;
}
.Vmine .Mnav {
  width: 100%;
}
.van-col {
  margin: 5px;
}
.Vmine .Mtop .Mbutton .van-button {
  width: 105px;
}
</style>