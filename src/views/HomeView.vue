<template>
  <NavBar></NavBar>
  <ServiceSection></ServiceSection>
  <RoomType></RoomType>
  <Gallery></Gallery>
  <About></About>
</template>

<script>
import NavBar from '../components/NavBar'
import ServiceSection from '../components/ServiceSection'
import RoomType from '../components/RoomType'
import Gallery from '../components/Gallery'
import About from '../components/About'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    ServiceSection,
    Gallery,
    RoomType,
    About
  }
}
</script>
