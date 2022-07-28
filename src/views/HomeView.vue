<template>
  <NavBar></NavBar>
  <ServiceSection></ServiceSection>
</template>

<script>
import NavBar from '../components/NavBar'
import ServiceSection from '../components/ServiceSection'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    ServiceSection
  }
}
</script>
