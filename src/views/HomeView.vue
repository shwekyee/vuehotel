<template>
  <NavBar></NavBar>
  <ServiceSection></ServiceSection>
  <RoomType></RoomType>
  <GalleryPage></GalleryPage>
  <AboutUs></AboutUs>
</template>

<script>
import NavBar from '../components/NavBar'
import ServiceSection from '../components/ServiceSection'
import RoomType from '../components/RoomType'
import GalleryPage from '../components/GalleryPage'
import AboutUs from '../components/AboutUs'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    ServiceSection,
    GalleryPage,
    RoomType,
    AboutUs
  }
}
</script>
