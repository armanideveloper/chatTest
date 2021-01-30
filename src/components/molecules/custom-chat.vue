<template>
  <b-sidebar
    header-class="custom-collapse-header"
    body-class="custom-collapse-body"
    class="custom-collapse"
    id="collapseExample"
    right
    no-header-close
  >
    <form @submit="checkForm">
      <custom-input
        ref="inputQuestion"
        :inputClassArray="['custom-collapse-body-question', 'mt-3']"
        inputPlaceholder="How can I help You"
      />
    </form>
    <b-card
      v-if="chatVisibility"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mt-5"
    >
      <div
        class="custom-collapse-body-chat-wrapper"
        v-for="(item, index) in userConversationArray"
        :key="index"
      >
        <div class="user mb-4">
          <div class="user-wrapper">
            <div class="user-wrapper-profileImage">
              <b-img
                v-bind="avatar"
                blank-color="rgba(128, 255, 255)"
                :rounded="true"
              />
            </div>
            <div class="user-wrapper-text ml-2">
              {{ item.question }}
            </div>
          </div>
        </div>
        <div class="bot">
          <div class="bot-wrapper">
            <div>
              <div class="bot-wrapper-text ml-2">
                <span
                  v-html="$options.filters.findMarkByRegexp(item.answer)"
                ></span>
              </div>
              <div class="emojidiv">
                <p
                  class="emojidiv-element"
                  @click="processAction('correctInfo', index)"
                  v-b-tooltip.hover.bottom="'Correct'"
                >
                  &#128077;
                </p>
                <p
                  class="emojidiv-element"
                  @click="processAction('notCorrectInfo', index)"
                  v-b-tooltip.hover.bottom="'Not correct'"
                >
                  &#128078;
                </p>
                <p
                  class="emojidiv-element"
                  @click="processAction('correctBySelf', index)"
                  v-b-tooltip.hover.bottom="'Improve myself'"
                >
                  &#9997;
                </p>
              </div>
            </div>
            <div class="bot-wrapper-profileImage ml-2">
              <b-img v-bind="avatar" blank-color="#88f" :rounded="true" />
            </div>
          </div>
        </div>
      </div>
    </b-card>
  </b-sidebar>
</template>

<script>
import customInput from "../atoms/input";
import { mapState, mapActions } from "vuex";

export default {
  name: "custom-chat",
  components: {
    customInput
  },
  data: function() {
    return {
      avatar: {
        blank: true,
        width: 16,
        height: 16
      },
      selectedDialogIndex: null
    };
  },
  computed: {
    ...mapState(["chatVisibility", "userConversationArray"])
  },
  filters: {
    findMarkByRegexp: function(value) {
      let styleMatchRegExp = /<mark[^>]*>([^<]+)<\/mark>/gi;
      let match = styleMatchRegExp.exec(value);
      return match[0];
    }
  },
  methods: {
    ...mapActions({
      askQuestion: "startChat",
      improveQuestion: "passCurrentChatData"
    }),

    checkForm(e) {
      e.preventDefault();
      let question = this.$refs.inputQuestion.$el.value;
      if (question !== " " || question !== "undefined" || question !== null) {
        let startChat = true;
        let payloadObject = {
          question: question,
          startChat: startChat
        };
        this.askQuestion(payloadObject);
      }
    },

    processAction(actionType, index) {
      this.selectedDialogIndex = index;
      if (actionType == "correctInfo") {
        this.$bvToast.toast(`It's just beginning of AI century`, {
          title: `Cool`,
          variant: "success",
          autoHideDelay: 1000,
          solid: true,
          toaster: "b-toaster-bottom-right"
        });
      } else if (actionType == "notCorrectInfo") {
        this.$bvToast.toast(
          `The next time I will do all my best to be usefull for you`,
          {
            title: `OOPS`,
            variant: "danger",
            autoHideDelay: 1000,
            solid: true,
            toaster: "b-toaster-bottom-right"
          }
        );
      } else if (actionType == "correctBySelf") {
        this.$bvToast.toast(
          `Please select text part which you need, that will be best for your problem solving`,
          {
            title: `Am i Wrong ?`,
            variant: "info",
            solid: true
          }
        );
        let newObject = {
          index: this.selectedDialogIndex,
          show: true
        };
        this.improveQuestion(newObject);
      }
    }
  }
};
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

    .card {
      background-color: $transparent;

      &-body {
        padding-left: 6px;
      }
    }

    &-chat-wrapper {
      display: flex;
      flex-direction: column;
      background-color: $white;
      margin-top: 10px;
      padding: 16px;
      border-radius: 16px;

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
            justify-content: flex-end;

            &-element {
              margin-left: 0.3em;
              margin-bottom: 0 !important;
              cursor: pointer !important;
            }
          }
        }
      }
    }
  }

  .b-sidebar {
    position: relative !important;
    max-height: 100vh;
    background-color: $primary !important;
  }
}
</style>
