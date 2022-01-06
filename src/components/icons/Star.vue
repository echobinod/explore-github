<template>
  <div class="me-3">
    <a href="#" class="card-link text-decoration-none" title="Star">
      <i class="fa fa-star-o" aria-hidden="true"></i>
      {{ repo.stargazers_count }}</a
    >
  </div>
</template>

<script>
export default {
  name: "Star",
  props: ["repo"],
};
</script>