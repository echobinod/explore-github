<template>
  <div class="me-3">
    <a href="#" class="card-link text-decoration-none" title="Watcher">
      <i class="fa fa-eye" aria-hidden="true"></i>
      {{ repo.watchers }}
    </a>
  </div>
</template>

<script>
export default {
  name: "Eye",
  props: ["repo"],
};
</script>