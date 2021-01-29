<template>
  <div class="main">
    <div class="main-top text-left">
      <b-nav-toggle
        target="String"
        class="ml-4 mt-2 mb-2"
        v-b-toggle="'collapseExample'"
      ></b-nav-toggle>
    </div>
    <b-container>
      <b-row>
        <b-col>
          <search-wrapper />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import searchWrapper from "../molecules/search-custom";
export default {
  name: "custom-wrapper",
  components: {
    searchWrapper
  }
};
</script>

<style lang="scss" scoped>
.main {
  &-top {
    background-color: $primary;

    & > button {
      background-color: $terinary;
    }
    .navbar-toggler-icon {
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
    }
  }
}
</style>
