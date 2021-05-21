<template>
  <div class="management">
    <div>
      <AddModelToJob />
      <RemoveModelFromJob />
      <CreateJob />
      <Modeldetails/>
      <CreateManager />
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CreateJob from "@/components/CreateJob.vue";
import CreateManager from "@/components/CreateManager.vue";
import Modeldetails from "@/components/Modeldetails.vue";
import AddModelToJob from "@/components/AddModelToJob.vue";
import RemoveModelFromJob from "@/components/RemoveModelFromJob.vue";

export default {
  name: "Home",
  components: {
    CreateJob,
    CreateManager,
    Modeldetails,
    AddModelToJob,
    RemoveModelFromJob,
  },
};
</script>
