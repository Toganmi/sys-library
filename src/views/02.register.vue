<template>
  <div class="Vregister">
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
          <van-button round block type="info" native-type="submit">注册</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
  import {register} from "../network/user";
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
        this.register(values.username, values.password)
      },
      register(account, password) {
        register(account, password).then(res => {
          // if (res) {
          //   Notify({ type: 'danger', message: '用户已存在' });
          // }
          if (res.account) {
            Notify({type: 'success', message: '注册成功', onClose: this.afterSuccess()});
          } else {
            Notify({type: 'danger', message: '用户已存在'});
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