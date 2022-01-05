<template>
  <div id="app">
    <div class="container pt-4">
      <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
        <div class="input-group">
          <input
            type="search"
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
      </div>

      <div class="row justify-content-end mb-3">
        <div class="col-1 text-end">
          <select class="form-control">
            <option value="ascendig">A-Z</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 mb-3">
          <div class="card shadow-sm p-3 mb-5 bg-white repo__card">
            <div class="card-body">
              <h5 class="card-title">
                <a href class="text-decoration-none text-dark">Repo Name</a>
              </h5>
              <h6 class="card-subtitle text-muted mb-2">
                <a href class="text-decoration-none text-muted">Author Name</a>
              </h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div class="d-flex mb-2">
                <div class="me-3">
                  <a href="#" class="card-link text-decoration-none" title="Star">
                    <i class="fa fa-star-o" aria-hidden="true"></i> 12</a
                  >
                </div>
                <div class="me-3">
                  <a href="#" class="card-link text-decoration-none" title="Fork">
                    <i class="panel-icon fa fa-code-fork"></i> 12</a
                  >
                </div>
                <div class="me-3">
                  <a href="#" class="card-link text-decoration-none" title="Watcher">
                    <i class="fa fa-eye" aria-hidden="true"></i> 12
                  </a>
                </div>
              </div>
              <span class="text-muted mb-2 timestamp">
                Last Updated: 25 days ago
              </span>
            </div>
          </div>
        </div>
      </div>

      <nav aria-label="...">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true"
              >Previous</a
            >
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item active" aria-current="page">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
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
