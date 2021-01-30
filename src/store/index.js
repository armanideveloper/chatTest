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
        
"An  would be not a mere recording device, but could be made into something closer to an automated police officer."

He is concerned the US and other governments, aided by the big internet companies, are moving towards creating a permanent record of everyone on earth, recording the whole of their daily lives.
While Snowden feels justified in what he did six years ago, he told the Guardian he was reconciled to being in Russia for years to come and was planning for his future on that basis.
He reveals he secretly married his partner, Lindsay Mills, two years ago in a Russian courthouse.

While he would <mark>rather be in the US</mark> or somewhere like Germany, he is relaxed in Russia, now able to lead a more or less normal daily life. He is less fearful than when he first arrived in 2013, when he felt lonely, isolated and paranoid that he could be targeted in the streets by US agents seeking retribution.

“I was very much a person the most powerful government in the world wanted to go away. They did not care whether I went away to prison. They did not care whether I went away into the ground. They just wanted me gone, ”he said.
    `;
};

let thirdText = function generateHTML3() {
  return `
        Operating Linux required a certain amount of technical acumen; it was not as easy to use as more popular operating systems such as Windows, Apple’s Mac OS, or IBM OS/2. However, <mark>Linux evolved</mark> into a remarkably reliable, efficient system that rarely crashed. Linux became popular in the late 1990s when competitors of Microsoft began taking the upstart OS seriously. Netscape Communications Corp., Corel Corp., Oracle Corp., Intel Corp., and other companies announced plans to support Linux as an inexpensive alternative to Windows. In addition to Linux being free, its source code can be viewed and freely modified by anyone, unlike a proprietary OS. This means that different language versions can be developed and deployed in markets that would be too small for the traditional companies. Also, many organizations and governments have expressed security reservations about using any kind of computer software that contains code that cannot be viewed. For all of the above reasons, localized versions of Linux have become common in China and many other non-Western countries.
    `;
};

let fourthText = function generateHTML4() {
  return `
        In the 2019 business year, the Industrial Technology business sector generated roughly 10 percent of total Bosch Group sales.[1] The sector includes the Drive and Control Technology division, whose products include customized drive, control, and linear motion for factory automation, plant construction and engineering, and mobile machinery.

The second division,<mark> Packaging Technology, provides process </mark> and packaging for the pharmaceuticals and foodstuffs industries. Its range includes stand-alone machines, systems, and service. In 2018, Bosch decided to look for a new owner for this business. Bosch's in-house provider of assembly systems, Robert Bosch Manufacturing Solutions GmbH, Stuttgart, remains part of the Bosch Group; up to now, it has been part of the Packaging Technology division.

In addition, the Bosch Connected Industry business unit, which develops software and carries out Industry 4.0 projects for internal and external customers, has been part of the Industrial Technology business sector since the start of 2018.
    `;
};

let fifthText = function generateHTML4() {
  return `
        The Internet Engineering Task Force (IETF) is the leading Internet standards body. It develops open standards through open processes with one goal in mind: to make the Internet work better. A large open international community of network designers, operators, vendors, and researchers, the IETF focuses on the evolution of the <mark>Internet architecture</mark> and the smooth operation of the Internet. The Internet Architecture Board (IAB)  and the Internet Research Task Force (IRTF) complement the work of the IETF by, respectively, providing long-range technical direction for Internet development and promoting research important to the Internet’s evolution.

Open standards are a cornerstone of the Internet. They are key to allowing devices, services, and applications to work together across a wide and dispersed network of networks. In addition to the standards themselves, the open processes and principles on which they are developed ensure the evolution of Internet technologies that meet the need of the growing number of devices and uses that empower people around the world.
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
      state.searchBlockNewValue.showNewValue = false;
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
