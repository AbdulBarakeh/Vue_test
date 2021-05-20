<template>
  <div class="home">
  
  <div >
        <Login />
    <Register />
  </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'

export default {
  name: 'Home',
  components: {
    Login,
    Register
  }
}
</script>
