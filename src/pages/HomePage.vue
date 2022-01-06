<template>
  <base-layout>
    <div class="container-fluid">
      <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
        <form @submit.prevent="searchRepo">
          <div class="input-group">
            <input
              type="search"
              v-model="repoInput"
              placeholder="Search Repositories..."
              aria-describedby="button-addon1"
              class="form-control border-0 bg-light"
              autofocus
            />
            <div class="input-group-append">
              <button
                id="button-addon1"
                type="submit"
                class="btn btn-link text-primary"
              >
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="row justify-content-end mb-3">
        <div class="col-1">
          <label for="sort">Sort</label>
          <select class="form-select" @change="sortResult($event.target.value)">
            <option></option>
            <option value="desc">DESC</option>
            <option value="asc">ASC</option>
          </select>
        </div>
        <div class="col-1">
          <label for="filter">Filter</label>
          <select
            class="form-select"
            @change="filterPerPage($event.target.value)"
          >
            <option></option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div
          v-for="repo in displayedRepos"
          :key="repo.id"
          class="col-lg-4 mb-3"
        >
          <card :repo="repo" :gotoRepoDetail="gotoRepoDetail"></card>
        </div>
      </div>

      <nav>
        <ul class="pagination justify-content-center">
          <li class="page-item" v-if="page != 1" @click="page--">
            <a class="page-link"> Previous </a>
          </li>
          <li
            class="page-item"
            :class="{ active: page == pageNumber }"
            v-for="(pageNumber, index) in pages.slice(page - 1, page + 5)"
            @click="page = pageNumber"
            :key="index"
          >
            <a class="page-link">{{ pageNumber }}</a>
          </li>
          <li class="page-item">
            <a class="page-link" @click="page++" v-if="page < pages.length"
              >Next</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </base-layout>
</template>

<script>
import { RepoService } from "../services/repo.service";
import BaseLayout from "../layout/BaseLayout.vue";
import card from "@/components/Card.vue";

export default {
  components: { BaseLayout, card },
  name: "HomePage",
  mounted() {
    // this.repoInput = "vuejs";
    // await this.searchRepo();
  },
  data() {
    return {
      repoInput: "",
      repos: [],
      page: 1,
      perPage: 6,
      pages: [],
    };
  },
  methods: {
    async searchRepo() {
      this.repos = [];
      const data = await RepoService.getRepos(this.repoInput);
      this.repos = data.items;
    },
    setPages() {
      let numberOfPages = Math.ceil(this.repos.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(repos) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return repos.slice(from, to);
    },
    gotoRepoDetail(id) {
      let data = this.repos.find((repo) => repo.id === id);
      this.$router.push({
        // name: "repoDetail",
        params: { data },
        path: `/repo/${data.owner.login}/${data.name}`,
      });
    },
    async sortResult(sortBy) {
      this.repos = [];
      this.pages = [];
      const data = await RepoService.sortRepos(sortBy, this.repoInput);
      this.repos = data.items;
    },
    filterPerPage(num) {
      this.perPage = num;
      this.pages = [];
      this.setPages();
    },
  },
  computed: {
    displayedRepos() {
      return this.paginate(this.repos);
    },
  },
  watch: {
    repos() {
      this.setPages();
    },
  },
};
</script>

<style>
</style>