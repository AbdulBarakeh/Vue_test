<template>
  <div class="wrapper fadeInDown">
    <div id="formContent">
      <h3>{{ msg }}</h3>

      <form>
        <select v-model="job" name="jobs" id="jobs">
          <option
            :value="job.efJobId"
            v-bind:key="job.efJobId"
            v-for="job in jobs"
          >
            {{ job.customer }} - {{ job.location }}
          </option></select
        ><br />
        <select v-model="model" name="models" id="models">
          <option
            :value="model.efModelId"
            v-bind:key="model.efModelId"
            v-for="model in models"
          >
            {{ model.firstName }} {{ model.lastName }}
          </option></select
        ><br />

        <label>Date of expense</label>
        <input type="Date" v-model="Dates" />
        <label>Put your expense on the job here</label>
        <input type="Text" v-model="Amount" />
        <label>What is the expense used on?</label>
        <input type="text" v-model="Text" />
        <input type="submit" value="Add Expense" v-on:click="addExpense" />
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      msg: "Add Expense To a Job",
      jobs: [],
      models: [],
      job: {},
      model: {},
      Amount: "",
      Text: "",
      Dates: "",
    };
  },
  methods: {
    addExpense(e) {
      let url = "https://localhost:44368/api/Expenses";
      var form = {
        ModelId: this.model,
        JobId: this.job,
        Date: new Date(this.Dates).toISOString(),
        Text: this.Text,
        amount: Number(this.Amount),
      };
      axios
        .post(url, form, {
          credentials: "include",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          this.jobs = res.data;
          console.log(res.data);
        })
        .catch((error) => {
          if (error.status === 401) {
            alert("unautherized please login");
          } else {
            alert("Something bad happened" + error);
          }
        });
        e.preventDefault();
    },
    getjobs() {
      let url = "https://localhost:44368/api/Jobs";
      axios
        .get(url, {
          method: "GET", // Or DELETE
          credentials: "include",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          this.jobs = res.data;
          console.log(res.data);
        })
        .catch((error) => {
          if (error.status === 401) {
            alert("unautherized please login");
          } else {
            alert("Something bad happened" + error);
          }
        });
    },
    getmodels() {
      let url = "https://localhost:44368/api/Models";
      axios
        .get(url, {
          method: "GET", // Or DELETE
          credentials: "include",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          this.models = res.data;
          console.log(res.data);
        })
        .catch((error) => {
          if (error.status === 401) {
            alert("unautherized please login");
          } else {
            alert("Something bad happened" + error);
          }
        });
    },
  },

    parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
},
  mounted() {
    this.getjobs();
    this.getmodels();

    var token = localStorage.getItem("token")
    var modelID = JSON.parse(atob(token.split('.')[1])).ModelId;
    console.dir(modelID);


  },
};
</script>


