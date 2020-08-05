<template>
  <div class="container">
    <div class="inner">
      <h2>ステータス</h2>
      <SkillList />
      <a href="https://tahara-tsukiko-resume.netlify.app/" target="_blank">レジュメ(簡易版)はこちら</a>
      <nuxt-link to="/" class="link">Topへ戻る</nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  min-height: 100vh;
  background: $black;
  margin: 0 auto;
  padding: 2% 0;
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
h2 {
  font-size: 2.2rem;
  margin-top: 16px;
}
a {
  display: block;
  margin-top: 16px;
  @media #{$mq_pc} {
    &:hover,
    &:focus {
      animation: flash 0.8s ease-in-out infinite alternate;
    }
  }
}
</style>