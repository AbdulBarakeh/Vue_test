<template>
  <div class="wrapper fadeInDown">
    <div id="formContent">
      <div class="accordion" id="accordionExample">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h2 class="mb-0">
              <button
                class="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                <h3>{{ msg }}</h3>
              </button>
            </h2>
          </div>

          <div
            id="collapseOne"
            class="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <form>
                <label for="">Type the customer</label>
                <input type="text" v-model="Customer" />
                <label for="">Type the start date</label>
                <input type="date" v-model="StartDate" />
                <label for="">Type number of days</label>
                <input type="number" v-model="Days" />
                <label for="">Type the location</label>
                <input type="text" v-model="Location" />
                <label for="">Type comments</label>
                <input type="text" v-model="Comments" />
                <input
                  value="Create job"
                  type="submit"
                  v-on:click="createJob"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      msg: "Create a Job",
      Customer: "",
      StartDate: "",
      Days: "",
      Location: "",
      Comments: "",
    };
  },
  methods: {
    createJob() {
      console.dir(this.StartDate);
      var form = {
        Customer: this.Customer,
        StartDate: new Date(this.StartDate).toISOString(),
        Days: Number(this.Days),
        Location: this.Location,
        Comments: this.Comments,
      };
      console.log(form);
      let url = "https://localhost:44368/api/Jobs";
       axios
        .post(url, form,{headers:{
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
    },
  },
};
</script>


