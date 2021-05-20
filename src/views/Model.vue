<template>
  <div class="model">
    <div >
          <AddExpenseToJob/>
    </div>


  </div>
</template>

<script>
// @ is an alias to /src
import AddExpenseToJob from "@/components/AddExpenseToJob.vue";

export default {
  name: "Model",
  components: {
    AddExpenseToJob,
  },
};
</script>
