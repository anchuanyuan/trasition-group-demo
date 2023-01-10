<template>
  <div class="flex">
    <div class="left overflow-hidden w-150px">
      当左边设置了宽度的时候 v-show transition-group 动画的初始位置 不对
      v-if的没有问题
    </div>
    <div class="right flex-1 relative">
      <transition-group name="zoom-in-bottom" tag="div" class="relative">
        <div
          class="h-100px bg-pink transition-all"
          key="box1"
          v-show="show.box1"
        >
          <el-form :modal="form" inline>
            <el-form-item lable="test">
              <el-input v-model="form.test"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div
          key="box2"
          class="h-100px bg-lightblue transform transition-all"
        ></div>
        <el-button
          class="transition-all"
          key="button"
          type="primary"
          @click="show.box1 = !show.box1"
          >{{ show.box1 ? "隐藏" : "显示" }}</el-button
        >
      </transition-group>
    </div>
  </div>
</template>
<script>
export default {
  name: "home-view",
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      show: {
        box1: true,
      },
      form: {
        test: "",
      },
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.zoom-in-bottom-enter,
.zoom-in-bottom-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
.zoom-in-bottom-leave-active {
  width: 100%;
  position: absolute;
}

.transition-all {
  transition: all 1000ms;
}
</style>
