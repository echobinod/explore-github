<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "fontawesome-4.7/css/font-awesome.min.css";
export default {
  name: "App",
  components: {},
};
</script>
ß
<style>
:root {
  --c-ash: #eaeef6;
}
body {
  background-color: var(--c-ash);
}

.repo__card {
  border-radius: 0.8rem;
}

.repo__card .card-link {
  color: #444;
}

.timestamp {
  color: #d3d3d3;
  font-size: 0.8rem;
}
</style>
