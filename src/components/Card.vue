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
        <div class="me-3">
          <a href="#" class="card-link text-decoration-none" title="Star">
            <i class="fa fa-star-o" aria-hidden="true"></i>
            {{ repo.stargazers_count }}</a
          >
        </div>
        <div class="me-3">
          <a href="#" class="card-link text-decoration-none" title="Fork">
            <i class="panel-icon fa fa-code-fork"></i>
            {{ repo.forks }}</a
          >
        </div>
        <div class="me-3">
          <a href="#" class="card-link text-decoration-none" title="Watcher">
            <i class="fa fa-eye" aria-hidden="true"></i>
            {{ repo.watchers }}
          </a>
        </div>
      </div>
      <span class="text-muted mb-2 timestamp">
        Last update:
        {{ new Date(repo.updated_at).toISOString().split("T")[0] }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["repo", "gotoRepoDetail"],
};
</script>

<style>
</style>