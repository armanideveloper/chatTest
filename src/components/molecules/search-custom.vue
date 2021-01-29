<template>
  <b-container>
    <b-row class="list-wrapper">
      <b-col cols="12" class="list-wrapper-first">
        <b-col cols="12" class="list-wrapper-first--search">
          <h3 class="mb-2">
            Mixer
          </h3>
          <input-search class="list-wrapper-first--search-input mb-2" />
          <custom-button buttonText="Search" />
        </b-col>
      </b-col>
      <b-col cols="12" class="mt-4 list-wrapper-last">
        <div class="list-wrapper-last--result">
          <h5 class="mb-2">
            Search result
          </h5>
          <result-block />
          <hr>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import inputSearch from "../atoms/input"
import customButton from "../atoms/button"
import resultBlock from "../atoms/resultBlock"

export default {
  name: "search-custom",
  components: {
    inputSearch,
    customButton,
    resultBlock
  },
  data: function () {
    return {
      fakeJsonArray: []
    }
  },
};
</script>

<style lang="scss" scoped>
.list-wrapper {
  &-first {
    &--search {
      &-input {
        @include inputStyle($google-border, 34px);
        width: 400px;
        @include  alignCenterSafeMethod();
      }
    }
  }

  &-last {
    &--result {
      width: 50%;
      @include  alignCenterSafeMethod();
    }
  }
}
</style>
