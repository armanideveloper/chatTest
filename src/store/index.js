import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let firstText = function generateHTML1() {
  return `
        A one-shot vaccine is considered by the <mark>World Health Organization</mark> to be the best option in pandemic settings, enhancing access, distribution and compliance,” said J&J Chief Science Officer Dr. Paul Stoffels in a statement. “85% efficacy in preventing severe COVID-19 disease and prevention of COVID-19-related medical interventions will potentially protect hundreds of millions of people from serious and fatal outcomes of COVID-19.
    `;
};

let secondText = function generateHTML2() {
  return `
        Even an
        <mark>
            sanction at the U.S
        </mark>
       . Capitol
    `;
};

let thirdText = function generateHTML3() {
  return `
        The selling came as 
        <mark>
            Wall Street
        </mark>
       was consumed
    `;
};

let fourthText = function generateHTML4() {
  return `
        The traders appear at
        <mark>
            at end of 1970
        </mark>
       , during big crisis
    `;
};

let fifthText = function generateHTML4() {
  return `
        GameStop’s
        shares gained 
        <mark>
            400 percent
        </mark>
    `;
};

export default new Vuex.Store({
  state: {
    userConversationArray: [],
    chatVisibility: false,
    count: -1,
    currentIndex: null,
    randomText: [
      firstText(),
      secondText(),
      thirdText(),
      fourthText(),
      fifthText()
    ],
    searchBlockNewValue: {
      showNewValue: false,
      value: null
    }
  },
  mutations: {
    mutateChat(state, payload) {
      state.count++;
      state.userConversationArray.push({
        question: payload.question,
        answer: state.randomText[state.count]
      });
      state.chatVisibility = payload.startChat;
    },
    mutateSearchResult(state, payload) {
      state.currentIndex = payload.index;
      state.searchBlockNewValue.value = state.randomText[payload.index];
      state.searchBlockNewValue.showNewValue = payload.show;
    }
  },
  actions: {
    startChat(context, payload) {
      context.commit("mutateChat", payload);
    },
    passCurrentChatData(context, payload) {
      context.commit("mutateSearchResult", payload);
    }
  },
  modules: {}
});
