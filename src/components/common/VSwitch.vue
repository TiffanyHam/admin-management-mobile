<template>
  <div class="switchBtn">
    <span class="switch" :class="isOff ? 'on' : 'off'" @click="isOff = !isOff">
      <span class="toggle"></span>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOff: true
    };
  }
};
</script>

<style lang="scss" scoped>
.switch {
  position: relative;
  left: 0;
  padding: 2px 2px;
  box-sizing: border-box;
  width: 1.333rem;
  border-radius: 0.4166rem;
  display: inline-block;
  background: #007dff;
  height: 0.7405rem;

  .toggle {
    position: absolute;
    width: 0.6294rem;
    height: 0.6294rem;
    border-radius: 50%;
    vertical-align: middle;
    text-align: center;
    background: #fff;
    z-index: 8;
    box-sizing: border-box;
  }
}
.switch.on {
  background: #007dff;
}
.switch.off {
  background: #a5a5a5;
}
.switch.on > .toggle {
  right: 2px;
}
.switch.off > .toggle {
  left: 2px;
}
</style>
