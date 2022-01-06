<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
export default {
  name: "BaseLayout",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
</style>