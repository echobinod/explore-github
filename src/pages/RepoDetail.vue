<template>
  <BaseLayout>
    <div class="container mt-5">
      <div class="row" v-if="repo">
        <div class="col-lg-5">
          <div class="bg-white shadow-sm p-3 mb-5 rounded">
            <img
              v-if="repo && repo.owner && repo.owner.avatar_url"
              :src="repo.owner.avatar_url"
              class="img-thumbnail"
              :alt="repo.owner.login"
              width="100"
              height="100"
            />
            <h3>
              <a
                :href="repo.owner.html_url"
                target="_blank"
                class="text-decoration-none text-dark"
              >
                {{ repo.owner.login }}
              </a>
            </h3>
            <span class="text-muted">
              {{ repo.description }}
            </span>
            <div class="d-flex my-2">
              <div class="me-3">
                <a
                  href="#"
                  target="_blank"
                  class="text-dark text-decoration-none"
                  title="Open Issues"
                >
                  <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                  {{ repo.open_issues }}</a
                >
              </div>
              <div class="me-3">
                <a
                  href="#"
                  target="_blank"
                  class="text-dark text-decoration-none"
                  title="Default Branch"
                >
                  <i class="fa fa-code-fork" aria-hidden="true"></i>
                  {{ repo.default_branch }}</a
                >
              </div>
              <div class="me-3">
                <a
                  :href="repo && repo.html_url"
                  target="_blank"
                  class="text-dark text-decoration-none"
                  title="Repository Name"
                >
                  <i class="fa fa-code" aria-hidden="true"></i>
                  {{ repo.name }}</a
                >
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-7">
          <div class="bg-white shadow-sm p-3 mb-5 rounded">
            <h1>README.md</h1>
            <hr />
            <div class="read-me-content">
              <div v-html="READMEmd"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script>
const API_URL = "https://raw.githubusercontent.com";
import axios from "axios";
import { RepoService } from "../services/repo.service";
import { markdown } from "markdown";
import BaseLayout from "../layout/BaseLayout.vue";

export default {
  name: "RepoDetail",
  components: {
    BaseLayout,
  },
  data() {
    return {
      repo: null,
      READMEmd: "",
    };
  },
  async mounted() {
    await this.getRepo(this.$route.params.id, this.$route.params.repo);
    await this.getReadMe();
  },
  methods: {
    async getReadMe() {
      let owner = this.repo.owner.login;
      let repo = this.repo.name;
      let branch = this.repo.default_branch;
      const data = await axios.get(
        `${API_URL}/${owner}/${repo}/${branch}/README.md`
      );
      this.READMEmd = markdown.toHTML(data.data);
    },
    async getRepo(owner, repo) {
      const data = await RepoService.getRepo(owner, repo);
      this.repo = data;
    },
  },
};
</script>

<style>
.read-me-content img {
  max-width: 100% !important;
}
</style>