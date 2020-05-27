<template>
  <div class="Vinfo">
    <!-- 昵称 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="nickname"
        name="昵称"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />
      <!-- 性别选择 -->
      <van-field name="radio" label="单选框">
        <template #input>
          <van-radio-group v-model="radio" direction="horizontal">
            <van-radio name="1">男</van-radio>
            <van-radio name="2">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <!--生日  -->
      <van-field
        readonly
        clickable
        name="calendar"
        :value="value"
        label="生日"
        placeholder="点击选择日期"
        @click="showCalendar = true"
      />
      <van-calendar v-model="showCalendar" @confirm="onConfirm" />
       <van-button round block type="info" native-type="submit">
      提交
    </van-button>
    </van-form>
  </div>
</template>

<script>
export default {
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    onConfirm(date) {
      this.value = `${date.getMonth() + 1}/${date.getDate()}`;
      console.log(this.value)
      this.showCalendar = false;
    }
  },
  data() {
    return {
      nickname: "",
      radio: "",
      showCalendar: false,
      value: ""
    };
  }
};
</script>

<style>
</style>