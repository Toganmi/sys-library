<template>
  <div class="Vres">
    <!--图书馆号  -->
    <van-form @submit="onSubmit">
      <van-field
              readonly
              clickable
              name="libNum"
              :value="Avalue"
              label="选择图书馆"
              placeholder="点击选择图书馆"
              @click="showArea = true"
      />
      <van-popup v-model="showArea" position="bottom">
        <van-picker
                show-toolbar
                :columns="columns"
                @confirm="onConfirm"
                @cancel="showPicker = false"
        />
      </van-popup>
      <!--选择时段  -->
      <van-field
              readonly
              clickable
              name="time"
              :value="Tvalue"
              label="时间选择"
              placeholder="点击选择时间"
              @click="showPicker = true"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-datetime-picker
                type="time"
                @confirm="onConfirmTime"
                @cancel="showPicker = false"
                :filter="filter"
                :min-hour="8"
                :max-hour="21"
        />
      </van-popup>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
  import {sendAppoint} from "../network/sendAppoint";
  import Notify from "vant/lib/notify";

  export default {
    data() {
      return {
        // 时间段
        Tvalue: "",
        showPicker: false,
        //   图书馆号
        Avalue: "",
        columns: ["1号", "2号", "3号", "4号", "5号"],
        showArea: false
      };
    },
    methods: {
      //   时间
      onConfirmTime(time) {
        this.Tvalue = time;
        this.showPicker = false;
      },
      // 地区
      onConfirm(value) {
        this.Avalue = value;
        this.showArea = false;
      },
      // 提交
      onSubmit(values) {
        console.log("submit", values);
        this.sendAppoint(this.$store.getters.name,values.libNum, values.time)
      },
      filter(type, options) {
        if (type === "minute") {
          return options.filter(option => option % 5 === 0);
        }

        return options;
      },
      sendAppoint(no,libNum, time) {
        sendAppoint(no,libNum, time).then(res => {
          console.log(res);
          Notify({type: 'success', message: '提交成功'});
        })
      }
    }
  };
</script>

<style>
</style>