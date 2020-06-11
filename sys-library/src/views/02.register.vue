<template>
  <div class="Vregister">
    <div class="login-page">
      <van-form @submit="onSubmit">
        <van-field
<<<<<<< HEAD
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
=======
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
>>>>>>> 2e5245f64712e129abcf89b268d3cd1a00d1b32f
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">注册</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
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
=======
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
    }
  }
};
>>>>>>> 2e5245f64712e129abcf89b268d3cd1a00d1b32f
</script>

<style>
</style>