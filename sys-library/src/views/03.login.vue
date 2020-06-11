<template>
  <div class="Vlogin">
    <div class="login-page">
     
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
<<<<<<< HEAD
          name="username"
=======
          name="用户名"
>>>>>>> 2e5245f64712e129abcf89b268d3cd1a00d1b32f
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
<<<<<<< HEAD
          name="password"
=======
          name="密码"
>>>>>>> 2e5245f64712e129abcf89b268d3cd1a00d1b32f
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
<<<<<<< HEAD
  import {login} from "../network/user";
  import Notify from "vant/lib/notify";

  export default {
=======
export default {
>>>>>>> 2e5245f64712e129abcf89b268d3cd1a00d1b32f
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
<<<<<<< HEAD
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
=======
>>>>>>> 2e5245f64712e129abcf89b268d3cd1a00d1b32f
    }
  }
};
</script>

<style>
</style>