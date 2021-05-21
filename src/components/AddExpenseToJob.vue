<template>
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <h3>{{msg}}</h3>
          
        <form>
          <select  v-model="job" name="jobs" id="jobs">
            <option :value="job.efJobId" v-bind:key="job.efJobId" v-for="job in jobs">{{job.customer}} - {{job.location}}</option>
          </select><br>
          <label>Put your expense on the job here</label>
          <input type="Text" v-model="Amount"/>
          <label>What is the expense used on?</label>
          <input type="text" v-model="Text">
          <input type="submit" value="Add Expense" v-on:click="addExpense">

        </form>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "Add Expense To a Job",
      jobs:[],
      Amount: "",
      Text: "", 
    };
  },
  methods: {
    addExpense(){
      var form = {
        Amount: Number(this.Amount),
        Text: this.Text,
      }
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
  },
  
  mounted() {
    this.getjobs();
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url('./assets/style.css');
/* BASIC */


</style>

