<template>
  <div class="wrapper fadeInDown">
    <div id="formContent">
      <h3>{{ msg }}</h3>
      <ul>
        <li style="list-style-type: none;" v-bind:key="job.value1" v-for="job in jobs">
          {{ job.efJobId}} - {{ job.customer}} - {{ job.startDate}} - {{ job.days}} - {{ job.location}} - {{ job.jobModels}}
        </li>
      </ul>
    </div>

  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      msg: "Jobs",
      jobs: [],
    };
  },

  mounted() {
let url = "https://localhost:44368/api/Jobs";
      axios.get(url,{
        method: "GET", // Or DELETE
        credentials: "include",
        headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
          }}).then((res =>{this.jobs = res.data; console.log(res.data);}))
        .catch((error) =>{ 
          if(error.status===401){
            alert("unautherized please login")
          }else{
            alert("Something bad happened" + error)
        }});
  },
};
// jobs:[{new Job(1,"something",new Date(),2,"Aarhus","comment",models)},new Job()]
</script>
