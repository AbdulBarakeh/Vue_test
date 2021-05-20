<template>
  <div class="jobs">
  
  <div class="d-flex flex-row">
    <SeeJobs class="p-2"/>
  </div>

  </div>
</template>

<script>
// @ is an alias to /src
import SeeJobs from '@/components/SeeJobs.vue'

export default {
  name: 'Jobs',
  components: {
    SeeJobs,
  }
}
</script>
