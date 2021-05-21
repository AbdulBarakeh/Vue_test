<template>
  <div class="wrapper fadeInDown">
    <div id="formContent">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h2 class="mb-0">
            <button
              class="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <h3>{{ msg }}</h3>
            </button>
          </h2>
        </div>

        <div
          id="collapseThree"
          class="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <form>
              <label for="">Type firstname</label>
              <input type="text" v-model="FirstName" />
              <label for="">Type lastname</label>
              <input type="text" v-model="LastName"/>
              <label for="">Type e-mail adress</label>
              <input type="text" v-model="Email"/>
              <label for="">Type password</label>
              <input type="text" v-model="Password"/>
              <input value="Create manager" type="submit" v-on:click="addManager" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "Create a Manager",
      FirstName:"",
      LastName:"",
      Email:"",
      Password:"",
    };
  },
  methods:{
  async addManager(){
    let form = {FirstName: this.FirstName, LastName: this.LastName, Email: this.Email, Password: this.Password};
    let url = "https://localhost:44368/api/Managers";
    try{
      await fetch(url,{
        method: "POST",
        body: JSON.stringify(form),
        headers: new Headers({
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        }),
      })}
      catch (err){
      alert("Error: " + err);
    }
    return;
    },
  },
};
</script>
