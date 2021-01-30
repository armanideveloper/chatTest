<template>
  <div class="search-wrapper">
    <a class="search-wrapper-link">
      {{ blockResult.link }}
    </a>
    <section class="search-wrapper-description">
      {{ blockResult.description }}
    </section>
    <p>
      <small class="search-wrapper-lastupdate">
        Last update: {{ blockResult.date }}
      </small>
    </p>
  </div>
</template>

<script>
export default {
  name: "resultBlock",
  props: {
    blockResult: {
      type: Object,
      default: () => ({
        link: "www.www.www",
        description: "description",
        date: "12/12/12"
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.search-wrapper {
  display: flex;
  flex-direction: column;
  text-align: left;

  &-link {
    cursor: pointer;
  }
}
</style>
