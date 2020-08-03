<template>
  <div class="container">
    <div class="inner">
      <logo />
      <Slime />
      <Info />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
}
.inner {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media #{$mq_pc} {
    max-width: 1024px;
    margin: 0 auto;
    padding: 2%;
  }
  @media #{$mq_tab} {
    padding: 4% 2%;
  }
}
</style>
