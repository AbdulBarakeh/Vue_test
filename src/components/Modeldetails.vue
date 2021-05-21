<template>
  <!-- //Source: https://getbootstrap.com/docs/4.3/components/collapse/ -->
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
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                <h3>{{ msg }}</h3>
              </button>
            </h2>
          </div>

          <div
            id="collapseTwo"
            class="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <form>
                <label>Type your firstname</label>
                <input type="Text" v-model="FirstName" />
                <label>Type your lastname</label>
                <input type="Text" v-model="LastName" />
                <label>Type your e-mail</label>
                <input type="Text" v-model="Email" />
                <label>Type your phoneNo</label>
                <input type="Text" v-model="PhoneNo" />
                <label>Type your address</label>
                <input type="Text" v-model="AddresLine1" />
                <label>Type your address2</label>
                <input type="Text" v-model="AddresLine2" />
                <label>Type your postalcode</label>
                <input type="Text" v-model="Zip" />
                <label>Type your City</label>
                <input type="Text" v-model="City" />
                <label>Type your Country</label>
                <input type="Text" v-model="Country" />
                <label>Type your birthdate</label>
                <input type="date" v-model="Birthdate" />
                <label>Type your nationality</label>
                <input type="Text" v-model="Nationality" />
                <label>Type your height</label>
                <input type="number" v-model="Height" />
                <label>Type your shoesize</label>
                <input type="number" v-model="ShoeSize" />
                <label>Type your haircolor</label>
                <input type="Text" v-model="HairColor" />
                <label>Type your eyecolor</label>
                <input type="Text" v-model="EyeColor" />
                <label>Do you have any comments?</label>
                <input type="Text" v-model="Comments" />
                <label>Type your password</label>
                <input type="Text" v-model="Password" />
                <input type="submit" value="Save model" v-on:click="addModel" />
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
      msg: "Create Model",
      FirstName: "",
      LastName: "",
      Email: "",
      PhoneNo: "",
      AddresLine1: "",
      AddresLine2: "",
      Zip: "",
      City: "",
      Country: "",
      Birthdate: "",
      Nationality: "",
      Height: "",
      ShoeSize: "",
      HairColor: "",
      EyeColor: "",
      Comments: "",
      Password: "",
    };
  },
  methods: {
    addModel(e) {
      var form = {
        FirstName: this.FirstName,
        LastName: this.LastName,
        Email: this.Email,
        PhoneNo: this.PhoneNo,
        AddresLine1: this.AddresLine1,
        AddresLine2: this.AddresLine2,
        Zip: this.Zip,
        City: this.City,
        Country: this.Country,
        Birthdate: new Date(this.Birthdate).toISOString(),
        Nationality: this.Nationality,
        Height:  Number(this.Height),
        ShoeSize:  Number(this.ShoeSize),
        HairColor: this.HairColor,
        EyeColor: this.EyeColor,
        Comments: this.Comments,
        Password: this.Password,
      };
      console.log(form);
      let url = "https://localhost:44368/api/Models";
      axios
        .post(url, form, {headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
        }})
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
      e.preventDefault();

    },
  },
};
</script>
