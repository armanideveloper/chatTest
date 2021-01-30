<template>
  <b-container>
    <b-row class="list-wrapper">
      <b-col cols="12" class="list-wrapper-first">
        <b-col
          v-if="!searchBlockNewValue.showNewValue"
          cols="12"
          class="list-wrapper-first--search"
        >
          <h3 class="mb-2">
            Mixer
          </h3>
          <input-search class="list-wrapper-first--search-input mb-2" />
          <custom-button @callButton="fetchData()" buttonText="Search" />
        </b-col>
      </b-col>
      <b-col cols="12" class="mt-4 list-wrapper-last">
        <div class="list-wrapper-last--result">
          <div
            v-if="currentArray !== null && !searchBlockNewValue.showNewValue"
          >
            <h5 class="mb-2">
              Search result
            </h5>
            <div v-for="(item, index) in currentArray" v-bind:key="index">
              <result-block :blockResult="item" />
              <hr />
            </div>
          </div>
          <div v-if="searchBlockNewValue.showNewValue">
            <small class="mb-5">
              Please select your prefered text part, which you find that con
              help your problem
            </small>
            <div>
              <p @mouseup="getSelectedText()" v-html="searchBlockNewValue.value">
              </p>
              <transition name="fade">
                <div
                    class="emojidiv"
                    v-if="showDrop"
                >
                  <p
                      class="emojidiv-element"
                      @click="processAction('good')"
                  >
                    Good
                    &#128077;
                  </p>
                  <p
                      class="emojidiv-element"
                      @click="processAction('bad')"
                  >
                    Bad
                    &#128078;
                  </p>
                </div>
              </transition>
            </div>
          </div>
          <div v-else>
            <h5>
              Please press find button
            </h5>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import inputSearch from "../atoms/input";
import customButton from "../atoms/button";
import resultBlock from "../atoms/resultBlock";
import { mapState } from "vuex";

export default {
  name: "search-custom",
  components: {
    inputSearch,
    customButton,
    resultBlock
  },
  data: function() {
    return {
      fakeJsonArray: [
        {
          link: "https://www.parisaeroport.fr/",
          description: "Airport of France",
          date: "12/07/2002"
        },
        {
          link: "https://www.skidive.ae",
          description: "Dubai skidive club",
          date: "12/12/2012"
        },
        {
          link: "www.aero.it",
          description: "Italy Avia company",
          date: "12/12/2020"
        }
      ],
      currentArray: null,
      showDrop: null
    };
  },
  computed: {
    ...mapState(["searchBlockNewValue"])
  },
  methods: {
    fetchData() {
      this.currentArray = this.fakeJsonArray;
    },
    processAction(str) {
      if(str == 'good') {
        this.$bvToast.toast(`Soon I will help again`, {
          title: `Cool I have remember your correct answer`,
          variant: "success",
          solid: true,
          toaster: "b-toaster-bottom-right"
        });
      } else if(str == 'bad') {
        this.$bvToast.toast(`I am self taught bot`, {
          title: `OK, the next time I will improve myself`,
          variant: "danger",
          solid: true,
          toaster: "b-toaster-bottom-right"
        });
      }
    },
    getSelectedText() {
      let currentText = document.getSelection().toString();
      console.log(currentText)
      this.showDrop = !this.showDrop
    }
  }
};
</script>

<style lang="scss" scoped>
.list-wrapper {
  &-first {
    &--search {
      &-input {
        @include inputStyle($google-border, 34px);
        width: 400px;
        @include alignCenterSafeMethod();
      }
    }
  }

  &-last {
    &--result {
      @include alignCenterSafeMethod();
    }
  }
}

.emojidiv {
  display: flex;
  flex-direction: row;
  max-width: 10%;
  justify-content: space-between;
  @include alignCenterSafeMethod()

  &-element {
    cursor: pointer;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
