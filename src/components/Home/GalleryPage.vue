<template>
  <section id="gallery" class="py-5">
        <div class="container-fluid">
            <!-- start title -->
            <h2 class="text-dark text-center display-3 my-5">Gallery</h2>
            <div class="under-title mb-5"></div>
            <!-- end title -->


            <div class="container-fluid">
                <div class="d-flex justify-content-center flex-wrap">
                    <div class="filters">
                        <img src="../../assets/img/gallery/1.jpg" class="img-fluid" width="300px" alt="fphoto1" />
                    </div>
                    <div class="filters">
                        <img src="../../assets/img/gallery/2.jpg" class="img-fluid" width="300px" alt="fphoto2" />
                    </div>
                    <div class="filters">
                        <img src="../../assets/img/gallery/3.jpg" class="img-fluid" width="300px" alt="fphoto3" />
                    </div>
                    <div class="filters">
                        <img src="../../assets/img/gallery/4.jpg" class="img-fluid" width="300px" alt="fphoto4" />
                    </div>
                    <div class="filters">
                        <img src="../../assets/img/gallery/5.jpg" class="img-fluid" width="300px" alt="fphoto5" />
                    </div>
                    <div class="filters">
                        <img src="../../assets/img/gallery/6.jpg" class="img-fluid" width="300px" alt="fphoto6" />
                    </div>
                    <div class="filters">
                        <img src="../../assets/img/gallery/7.jpg" class="img-fluid" width="300px" alt="fphoto7" />
                    </div>
                    <div class="filters">
                        <img src="../../assets/img/gallery/8.jpg" class="img-fluid" width="300px" alt="fphoto8" />
                    </div>
                    <div class="filters">
                        <img src="../../assets/img/gallery/9.jpg" class="img-fluid" width="300px" alt="fphoto9" />
                    </div>
                    <div class="filters">
                        <img src="../../assets/img/gallery/10.jpg" class="img-fluid" width="300px" alt="fphoto10" />
                    </div>
                    <div class="filters">
                        <img src="../../assets/img/gallery/11.jpg" class="img-fluid" width="300px" alt="fphoto11" />
                    </div>
                    <div class="filters">
                        <img src="../../assets/img/gallery/12.jpg" class="img-fluid" width="300px" alt="fphoto12" />
                    </div>
                    <div class="filters">
                        <img src="../../assets/img/gallery/h1.jpg" class="img-fluid" width="300px" alt="h1" />
                    </div>
                    <div class="filters">
                        <img src="../../assets/img/gallery/h2.jpg" class="img-fluid" width="300px" alt="h3" />
                    </div>
                    <div class="filters">
                        <img src="../../assets/img/gallery/h3.jpg" class="img-fluid" width="300px" alt="h5" />
                    </div>
                    <div class="filters">
                        <img src="../../assets/img/gallery/h5.jpg" class="img-fluid" width="300px" alt="h2" />
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
.filters{
    overflow: hidden;
    cursor:pointer;
}

.filters img{
    transition: all 2.5s;
}

.filters:hover img{
    transform: scale(1.3);
}
</style>