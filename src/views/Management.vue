<template>
  <div class="management">
    <div>
      <CreateJob />
      <CreateManager />
      <CreateModel />
      <AddModelToJob />
      <RemoveModelFromJob />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CreateJob from "@/components/CreateJob.vue";
import CreateManager from "@/components/CreateManager.vue";
import CreateModel from "@/components/CreateModel.vue";
import AddModelToJob from "@/components/AddModelToJob.vue";
import RemoveModelFromJob from "@/components/RemoveModelFromJob.vue";

export default {
  name: "Home",
  components: {
    CreateJob,
    CreateManager,
    CreateModel,
    AddModelToJob,
    RemoveModelFromJob,
  },
};
</script>
