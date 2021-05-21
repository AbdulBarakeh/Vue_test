
<template>
  <div class="login">
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <!-- Tabs Titles -->
        <!-- Icon -->
        <h3>Login</h3>

        <!-- Login Form -->
        <form>
          <input
            v-model="email"
            type="text"
            id="email"
            name="email"
            placeholder="email"
          />
          <input
            v-model="password"
            type="password"
            id="password"
            name="password"
            placeholder="password"
          />
          <input
            v-on:click="login"
            type="submit"
            value="Log In"
          />
        </form>

        <!-- Remind Passowrd -->
        <div id="formFooter">
          <a class="underlineHover" href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {},
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let form = {email: this.email,password: this.password};
      let url = "https://localhost:44368/api/account/login";
      try {
        let response = await fetch(url, {
          method: "POST",
          body: JSON.stringify(form), // Assumes data is in an object called form
          headers: new Headers({
            "Content-Type": "application/json",
          }),
        });
        if (response.ok) {
          
          let res = await response.json();
          console.log(res)
          localStorage.setItem("token", res.token.jwt);
          localStorage.setItem("isManager", res.isManager);
          // Change view to some other component
          // …
          
        } else {
          alert("Server returned: " + response.statusText);
        }
      } catch (err) {
        alert("Error: " + err);
      }
      return;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* BASIC */



</style>

