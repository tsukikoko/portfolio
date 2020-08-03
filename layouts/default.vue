<template>
  <div>
    <Nuxt />
  </div>
</template>
<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>
<style>
body {
  background-color: #fff;
}
</style>
