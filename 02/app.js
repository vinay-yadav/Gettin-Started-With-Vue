const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Learn Vue!!",
      //   courseGoalB: "<h2>Master Vue & build amazing apps.</h2>",
      courseGoalB: "Master Vue & build amazing apps.",
      vueLink: "https://youtube.com",
    };
  },
  methods: {
    ouputGoal() {
      console.log(this);
      const random = Math.random();

      if (random < 0.5) return this.courseGoalA;

      return this.courseGoalB;
    },
  },
});

app.mount("#user-goal");
