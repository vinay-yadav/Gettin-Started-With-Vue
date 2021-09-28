// new Vue({
//   // el: "#app",
//   data() {
//     return {
//       goals: [],
//       enteredValue: "",
//     };
//   },
//   methods: {
//     addGoal() {
//       this.goals.push(this.enteredValue);
//       this.enteredValue = "";
//     },
//   },
// }).$mount("#app");

const app = Vue.createApp({
  // el: "#app",
  setup() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
});
app.mount("#app");
