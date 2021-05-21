<template>
  <div class="wrapper fadeInDown">
    <div id="formContent">
      <h3>{{ msg }}</h3>

      <form >
        <select v-model="job" name="jobs" id="jobs">
          <option :value="job.efJobId" v-bind:key="job.efJobId" v-for="job in jobs">{{job.customer}} - {{job.location}}</option></select
        ><br />
        <label>Wich model would you like to add?</label><br />
        <select v-model="model" name="models" id="models">
          <option :value="model.efModelId" v-bind:key="model.efModelId" v-for="model in models">{{model.firstName}} {{model.lastName}}</option></select
        ><br />
        <input type="submit" value="Add model to the job" v-on:click="addModel" />
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      msg: "Add a model to a job",
      jobs: [],
      models: [],
      model:{},
      job:{}
    };
  },
  methods: {
    addModel(e){
      console.dir(this.job)
      console.dir(this.model)

       let url = `https://localhost:44368/api/Jobs/${this.job}/model/${this.model}`;

       axios
        .post(url,null ,{headers:{
          Authorization: "Bearer " + localStorage.getItem("token")
        }})
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
  mounted() {
    this.getjobs();
    this.getmodels();
  },
};
</script>
