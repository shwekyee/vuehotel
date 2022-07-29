<template>
  <div class="d-flex" id="wrapper">
        <!-- Sidebar -->
        <div class="bg-white" id="sidebar-wrapper">
            <div class="sidebar-heading text-center primary-text fs-5 fw-bold text-uppercase border-bottom d-flex justify-content-lg-end justify-content-center align-items-center py-2 my-2 pe-0 pe-lg-3">
                <span class="d-none d-lg-inline-block">Light Idea</span>
                <font-awesome-icon icon="fa-solid fa-hotel" class="ms-1 ms-lg-2"></font-awesome-icon>
            </div>
            <p class="primary-text fw-bold border-bottom d-flex justify-content-lg-end justify-content-center align-items-center my-2 pt-2 pb-3 pe-0 pe-lg-3">
                <span class="d-none d-lg-inline-block">Username</span>
                <font-awesome-icon icon="fa-solid fa-user" class="ms-1 ms-lg-2"></font-awesome-icon>
            </p>
            <div class="list-group list-group-flush my-3">
                <a href="#" @click="activeMenu('menu')" :class="{active:menuActive==='menu'}"
                class=" d-flex justify-content-lg-end justify-content-center align-items-center list-group-item list-group-item-action bg-transparent second-text">
                    <span class="d-none d-lg-inline-block">Room Menu</span>
                    <font-awesome-icon icon="fa-solid fa-key" class="ms-1 ms-lg-2" />
                </a>
                <a href="#" @click="activeMenu('gallery')" :class="{active:menuActive==='gallery'}"
                class=" d-flex justify-content-lg-end justify-content-center align-items-center list-group-item list-group-item-action bg-transparent second-text fw-bold">
                    <span class="d-none d-lg-inline-block">Gallery</span>
                    <font-awesome-icon icon="fa-solid fa-file-image" class="ms-1 ms-lg-2" /> 
                </a>
                <a href="#" @click="activeMenu('service')" :class="{active:menuActive==='service'}"
                class=" d-flex justify-content-lg-end justify-content-center align-items-center list-group-item list-group-item-action bg-transparent second-text fw-bold">
                    <span class="d-none d-lg-inline-block">Service</span>
                    <font-awesome-icon icon="fa-solid fa-file-image" class="ms-1 ms-lg-2" />
                </a>        
                <a href="#" @click="activeMenu('logout')" :class="{active:menuActive==='logout'}"
                class=" d-flex justify-content-lg-end justify-content-center align-items-center list-group-item list-group-item-action bg-transparent text-danger fw-bold">
                    <span class="d-none d-lg-inline-block">Logout</span>
                    <font-awesome-icon icon="fa-solid fa-power-off" class="ms-1 ms-lg-2"></font-awesome-icon>
                </a>
            </div>
        </div>
        <!-- /#sidebar-wrapper -->

        <!-- Page Content -->
        <div id="page-content-wrapper">
            <nav class="py-4 px-4">
                
            </nav>

            <div class="container-fluid px-4">
                
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    setup(){
       const menuActive = ref('menu')


       const activeMenu = menu => menuActive.value = menu
 
       return {menuActive ,activeMenu}
    }
}
</script>

<style scoped>
:root {
  --main-bg-color: #5995fd;
  --main-text-color: #5995fd;
  --second-text-color: #bbbec5;
  --second-bg-color: #c1efde;
}

.primary-text {
  color: var(--main-text-color);
}

.second-text {
  color: var(--second-text-color);
}

.primary-bg {
  background-color: var(--main-bg-color);
}

.secondary-bg {
  background-color: var(--second-bg-color);
}

.rounded-full {
  border-radius: 100%;
}

#wrapper {
  overflow-x: hidden;
  background: #C9D6FF;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #C9D6FF, #E2E2E2);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #C9D6FF, #E2E2E2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

#sidebar-wrapper {
  min-height: 100vh;
  margin-left: 0rem;
  -webkit-transition: margin 0.25s ease-out;
  -moz-transition: margin 0.25s ease-out;
  -o-transition: margin 0.25s ease-out;
  transition: margin 0.25s ease-out;
}

#sidebar-wrapper .list-group {
  width: 3rem;
}

#page-content-wrapper {
  min-width: 100vw;
}

#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
}

#menu-toggle {
  cursor: pointer;
}

.list-group-item {
  border: none;
}

.list-group-item.active {
  background-color: #5995fd !important;
  color: #fff !important;
  font-weight: bold;
  border: none;
}

@media (min-width: 990px) {
  #sidebar-wrapper {
    margin-left: -3rem;
  }

  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: -15rem;
  }
  #sidebar-wrapper .list-group {
  width: 15rem;
 }
}

</style>