<template>
  <div class="card shadow-sm p-3 mb-5 bg-white repo__card">
    <div class="card-body">
      <h5 class="card-title">
        <a
          class="text-decoration-none text-dark"
          @click="gotoRepoDetail(repo.id)"
          >{{ repo.name }}</a
        >
      </h5>
      <h6 class="card-subtitle text-muted mb-2">
        <a href class="text-decoration-none text-muted">{{
          repo.owner.login
        }}</a>
      </h6>
      <p class="card-text">
        {{ repo.description }}
      </p>
      <div class="d-flex mb-2">
        <star :repo="repo"></star>
        <fork :repo="repo"></fork>
        <eye :repo="repo"></eye>
      </div>
      <span class="text-muted mb-2 timestamp">
        Last update:
        {{ new Date(repo.updated_at).toISOString().split("T")[0] }}
      </span>
    </div>
  </div>
</template>

<script>
import star from "./icons/Star.vue";
import fork from "./icons/Fork.vue";
import eye from "./icons/Eye.vue";
export default {
  components: { fork, star, eye },
  name: "Card",
  props: ["repo", "gotoRepoDetail"],
};
</script>

<style>
</style>