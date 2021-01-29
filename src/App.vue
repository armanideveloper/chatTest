<template>
  <div id="app">
    <b-container>
      <b-row>
        <custom-input />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import customInput from "./components/atoms/input";

export default {
  name: "App",
  components: {
    customInput
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
  margin-top: 60px;
}
.we {
  background: #fff;
  display: flex;
  border: 1px solid #dfe1e5;
  box-shadow: none;
  border-radius: 24px;
  z-index: 3;
  height: 44px;
  margin: 0 auto;
}
</style>
