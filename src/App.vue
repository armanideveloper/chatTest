<template>
  <div id="app" class="wrapper">
    <b-row class="wrapper-main">
      <b-col class="wrapper-main-left">
        <custom-wrapper />
      </b-col>
      <custom-chat />
    </b-row>
  </div>
</template>

<script>
import CustomWrapper from "@/components/organisms/wrapper-custom";
import CustomChat from "@/components/molecules/custom-chat";

export default {
  name: "App",
  components: {
    CustomWrapper,
    CustomChat
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.wrapper {
  &-main {
    &-left {
      padding-right: 2px !important;
    }
  }
}
</style>
