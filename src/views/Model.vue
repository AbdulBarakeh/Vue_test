<template>
  <div class="model">

  
  <div >
        <AddExpenseToJob/>
        <Modeldetails/>
  </div>

  </div>
</template>

<script>
// @ is an alias to /src

import AddExpenseToJob from '@/components/AddExpenseToJob.vue'
import Modeldetails from '@/components/Modeldetails.vue'

export default {
  name: "Model",
  components: {

    AddExpenseToJob, Modeldetails
  }
}

</script>
