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
      <div
        class="form-control-feedback text-danger"
        v-if="attemptSubmit && missingRepoInput"
      >
        This field is required.
      </div>
      <div class="row justify-content-end mb-3">
        <div class="col-2">
          <label for="sort">Sort</label>
          <select
            class="form-select"
            v-model="sortInput"
            @change="sortResult(sortInput)"
          >
            <option value="stars"></option>
            <option value="stars">Stars</option>
            <option value="forks">Forks</option>
            <option value="updated">Updated</option>
          </select>
        </div>
        <div class="col-2">
          <label for="filter">Filter</label>
          <select
            class="form-select"
            v-model="filterInput"
            @change="filterPerPage(filterInput)"
          >
            <option value="6"></option>
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
  computed: {
    displayedRepos() {
      return this.paginate(this.repos);
    },
    missingRepoInput() {
      return this.repoInput === "";
    },
  },
  watch: {
    repos() {
      this.setPages();
    },
  },
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
      attemptSubmit: false,
      sortInput: "",
      filterInput: "",
    };
  },
  methods: {
    async searchRepo(event) {
      if (this.missingRepoInput) {
        this.attemptSubmit = true;
        event.preventDefault();
      } else {
        this.repos = [];
        this.pages = [];
        const data = await RepoService.getRepos(this.repoInput);
        this.repos = data.items;
      }
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
      if (this.missingRepoInput) {
        this.attemptSubmit = true;
      } else {
        this.repos = [];
        this.pages = [];
        const data = await RepoService.sortRepos(sortBy, this.repoInput);
        this.repos = data.items;
      }
    },
    filterPerPage(num) {
      if (this.missingRepoInput) {
        this.attemptSubmit = true;
      } else {
        this.attemptSubmit = false;
        this.perPage = num;
        this.pages = [];
        this.setPages();
      }
    },
  },
};
</script>

<style>
</style>