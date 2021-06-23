<template>
  <div>
    <h1 style="align-text: center;">Welcome brother/sister</h1>
  </div>
</template>

<script>
export default {
  name: "welcome-page",
  created() {
      this.redirector();
  },
  methods: {
      redirector() {
          setTimeout(() => {return this.$router.go(-2)}, 3000 )
          ;
      }
  },
};
</script>

<style></style>
