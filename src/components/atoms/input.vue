<template>
  <b-form-input
    class="primary-input"
    :class="inputClassArray"
    :placeholder="inputPlaceholder"
    :autocomplete="cutomAutoComplete"
    :readonly="customReadonly"
    :autofocus="customAutofocus"
  />
</template>

<script>
export default {
  name: "custom-input",
  props: {
    inputPlaceholder: {
      type: String,
      default: null
    },
    inputClassArray: {
      type: Array
    },
    cutomAutoComplete: {
      type: String,
      default: "off"
    },
    customReadonly: {
      type: Boolean,
      default: false
    },
    customAutofocus: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.primary-input {
  @include inputStyle($google-border, 34px);
  @include setBackgroundRgba($transparent, 0);
  &:focus {
    box-shadow: $none;
    @include setBackgroundRgba($transparent, 0);
    @include inputStyle($google-border, 34px);
  }
}
</style>
