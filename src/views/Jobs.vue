<template>
  <div class="jobs">
  
  <div >
    <SeeJobs />
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
