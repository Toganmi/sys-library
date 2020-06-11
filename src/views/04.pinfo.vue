<template>
  <div class="Vinfo">
    <!-- 昵称 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="nickname"
<<<<<<< HEAD
        name="nickname"
=======
        name="昵称"
>>>>>>> 2e5245f64712e129abcf89b268d3cd1a00d1b32f
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />
<<<<<<< HEAD
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
=======
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
>>>>>>> 2e5245f64712e129abcf89b268d3cd1a00d1b32f
    </van-form>
  </div>
</template>

<script>
export default {
  methods: {
    onSubmit(values) {
      console.log("submit", values);
<<<<<<< HEAD
=======
    },
    onConfirm(date) {
      this.value = `${date.getMonth() + 1}/${date.getDate()}`;
      console.log(this.value)
      this.showCalendar = false;
>>>>>>> 2e5245f64712e129abcf89b268d3cd1a00d1b32f
    }
  },
  data() {
    return {
      nickname: "",
<<<<<<< HEAD
      sex: "",
      studyId: ""
    };
  },
  created() {
    this.$store.dispatch('setHeadLeft', true)
  },
  destroyed() {
    this.$store.dispatch('setHeadLeft', false)
=======
      radio: "",
      showCalendar: false,
      value: ""
    };
>>>>>>> 2e5245f64712e129abcf89b268d3cd1a00d1b32f
  }
};
</script>

<style>
</style>