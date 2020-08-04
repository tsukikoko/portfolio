<template>
  <div class="container">
    <div class="inner">
      <logo />
      <Slime />
      <Info />
      <Command />
    </div>
  </div>
</template>

<script>
import Command from '~/components/Command.vue';
export default {
  components: {
    Command,
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  min-height: 100vh;
  background: $black;
  margin: 0 auto;
}
.inner {
  position: relative;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media #{$mq_pc} {
    max-width: 960px;
    min-width: 768px;
    margin: 0 auto;
    padding: 2%;
  }
  @media #{$mq_tab} {
    padding: 4% 2%;
  }
}
</style>
