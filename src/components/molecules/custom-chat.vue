<template>
    <b-sidebar header-class="custom-collapse-header" body-class="custom-collapse-body" class="custom-collapse" id="collapseExample" right no-header-close>
      <b-card>I am collapsible content!</b-card>
    </b-sidebar>
</template>

<script>
export default {
  name: "custom-chat"
}
</script>

<style lang="scss">
.custom-collapse {
  position: relative !important;

  &-header {
    display: $none !important;
  }

  .b-sidebar {
    position: relative !important;
    max-height: 100vh;
    background-color: $primary !important;
  }
}
</style>
