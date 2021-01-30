<template>
  <b-button @click="emitData" class="btn-sm" :variant="buttonVariant">
    {{ buttonText }}
  </b-button>
</template>

<script>
export default {
  name: "custom-button",
  props: {
    buttonText: {
      type: String,
      default: "Default Button"
    },
    buttonVariant: {
      type: String,
      default: "outline-primary"
    }
  },
  methods: {
    emitData() {
      this.$emit("callButton");
    }
  }
};
</script>

<style scoped></style>
