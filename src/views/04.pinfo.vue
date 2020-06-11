<template>
  <div class="Vinfo">
    <!-- 昵称 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="nickname"
        name="nickname"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />
      <!-- 学号 -->
      <van-field
        v-model="studyId"
        name="studyId"
        label="学号"
        placeholder="学号"
        :rules="[{ required: true, message: '请填写学号' }]"
      />
      <!-- 性别选择 -->
      <van-field name="sex" label="单选框">
        <template #input>
          <van-radio-group v-model="sex" direction="horizontal">
            <van-radio name="man">男</van-radio>
            <van-radio name="women">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>

      <van-button round block type="info" native-type="submit">提交</van-button>
    </van-form>
  </div>
</template>

<script>
export default {
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    }
  },
  data() {
    return {
      nickname: "",
      sex: "",
      studyId: ""
    };
  },
  created() {
    this.$store.dispatch('setHeadLeft', true)
  },
  destroyed() {
    this.$store.dispatch('setHeadLeft', false)
  }
};
</script>

<style>
</style>