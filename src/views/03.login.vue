<template>
  <div class="Vlogin">
    <div class="login-page">
     
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">登录</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
  import {login} from "../network/user";
  import Notify from "vant/lib/notify";

  export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
      this.login(values.username, values.password)
    },
    login(account, password) {
      login(account, password).then((res,err) => {
        console.log(res);
        console.log(err);
        if (res.success) {
          // console.log("登录成功");
          localStorage.setItem("name", account)
          this.$store.dispatch('setName', account)
          Notify({
            type: 'success',
            message: '登录成功',
            onClose: this.afterSuccess()
          });
        }
        else {
          // console.log("用户不存在或密码错误");
          Notify({ type: 'danger', message: '用户不存在或密码错误' });
        }
      })
    },
    afterSuccess() {
      this.$router.push('/mine')
    }
  }
};
</script>

<style>
</style>