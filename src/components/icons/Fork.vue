<template>
  <div class="me-3">
    <a href="#" class="card-link text-decoration-none" title="Fork">
      <i class="panel-icon fa fa-code-fork"></i>
      {{ repo.forks }}</a
    >
  </div>
</template>
<script>
export default {
  name: "Fork",
  props: ["repo"],
};
</script>