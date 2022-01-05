<template>
  <div class="container mt-5">
    <router-link
      :to="{ name: 'homepage' }"
      class="text-decoration-none btn btn-primary mb-3"
    >
      <i class="fa fa-chevron-left" aria-hidden="true"></i>
      Back to home
    </router-link>
    <div class="row">
      <div class="col-lg-5">
        <div class="bg-white shadow-sm p-3 mb-5 rounded">
          <h3>
            <a href="#" target="_blank" class="text-decoration-none text-dark">
              Binod Shahi
            </a>
          </h3>
          <span class="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
          <div class="d-flex my-2">
            <div class="me-3">
              <a
                href="#"
                target="_blank"
                class="text-dark text-decoration-none"
              >
                <i class="fa fa-play-circle" aria-hidden="true"></i> Issue 12</a
              >
            </div>
            <div class="me-3">
              <a
                href="#"
                target="_blank"
                class="text-dark text-decoration-none"
              >
                <i class="fa fa-code-fork" aria-hidden="true"></i> Branch
                Name</a
              >
            </div>
            <div class="me-3">
              <a
                href="#"
                target="_blank"
                class="text-dark text-decoration-none"
              >
                <i class="fa fa-code" aria-hidden="true"></i> Repo Name</a
              >
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-7">
        <div class="bg-white shadow-sm p-3 mb-5 rounded">
          <h3>README.md</h3>
          SdFat Version 2 supports FAT16/FAT32 and exFAT SD cards. It is mostly
          backward compatible with SdFat Version 1 for FAT16/FAT32 cards. exFAT
          supports files larger than 4GB so files sizes and positions are type
          uint64_t for classes that support exFAT. exFAT has many features not
          available in FAT16/FAT32. exFAT has excellent support for contiguous
          files on flash devices and supports preallocation. If the SD card is
          the only SPI device, use dedicated SPI mode. This can greatly improve
          performance. See the bench example.p
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RepoDetail",
};
</script>

<style>
</style>