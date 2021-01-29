<template>
    <b-sidebar header-class="custom-collapse-header" body-class="custom-collapse-body" class="custom-collapse" id="collapseExample" right no-header-close>

      <form
          @submit="checkForm"
      >
        <custom-input ref="inputQuestion"  :inputClassArray="['custom-collapse-body-question', 'mt-3']" inputPlaceholder="How can I help You" />
      </form>

      <b-card
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mt-5"
      >
        <div class="custom-collapse-body-chat-wrapper">
          <div class="user mb-4">
            <div class="user-wrapper">
              <div class="user-wrapper-profileImage">
                <b-img v-bind="avatar" blank-color="rgba(128, 255, 255)" :rounded="true" />
              </div>
              <div class="user-wrapper-text ml-2">
                My questionn is
              </div>
            </div>
          </div>
          <div class="bot mb-4">
            <div class="bot-wrapper">
              <div class="bot-wrapper-profileImage">
                <b-img v-bind="avatar" blank-color="#88f" :rounded="true" />
              </div>
              <div>
                <div class="bot-wrapper-text ml-2" @click="openEmoji">
                  My answer is
                </div>
                <transition name="fade">
                  <div class="emojidiv" v-if="showEmojiDiv">
                    <p class="emojidiv-element">
                      &#128077;
                    </p>
                    <p lass="emojidiv-element">
                      &#128078;
                    </p>
                    <p lass="emojidiv-element">
                      &#9997;
                    </p>
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </b-card>
    </b-sidebar>
</template>

<script>
import customInput from '../atoms/input'

export default {
  name: "custom-chat",
  components: {
    customInput
  },
  data: function () {
    return {
      avatar: {
        blank: true,
        width: 16,
        height: 16
      },
      showEmojiDiv: false
    }
  },
  methods: {
    openEmoji() {
      this.showEmojiDiv = !this.showEmojiDiv
    },

    checkForm(e) {
      e.preventDefault();
      console.log('dsd')
    }
  }
}
</script>

<style lang="scss">
.custom-collapse {
  position: relative !important;

  &-header {
    display: $none !important;
  }

  &-body {
    &-question {
      width: 80% !important;
      @include alignCenterSafeMethod();
      border-radius: 34px !important;
      @include setBackgroundRgba($transparent, 0);
    }

    &-chat-wrapper {
      display: flex;
      flex-direction: column;

      .user {
        &-wrapper {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
        }
      }

      .bot {
        &-wrapper {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;

          &-text {
            cursor: pointer;
          }

          .emojidiv {
            display: flex;
            flex-direction: row;

            &-element {
              margin-left: 0.3em;
            }
          }
        }
      }
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .b-sidebar {
    position: relative !important;
    max-height: 100vh;
    background-color: $primary !important;
  }
}
</style>
