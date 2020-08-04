<template>
  <div class="info">
    <div class="info_inner">
      <h3>
        <vue-typer :repeat="0" :type-delay="100" text="タハラ ツキコ / Lv.23"></vue-typer>
      </h3>
      <vue-typer :repeat="0" :pre-type-delay="2500" :type-delay="100" text="タハラ ツキコがあらわれた！"></vue-typer>
    </div>
  </div>
</template>

<script>
import { VueTyper } from 'vue-typer';
export default {
  name: 'Info',
  components: {
    VueTyper,
  },
};
</script>

<style lang="scss" scoped>
.info {
  width: 90%;
  background-color: $darkyellow;
  border: 3px double $black;
  margin: 0 auto;
  padding: 8px;
  &_inner {
    border: 2px double $black;
    padding: 16px;
  }
}
</style>
