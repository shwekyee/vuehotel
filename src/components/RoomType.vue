<template>
  <!-- Start Room Section -->
    <section id="room" class="rooms pt-5">
        <div class="container-fluid">
            <div id="room-list" class="my-5 mb-1 d-flex rooms-list">
                <h2 class="text-dark btn-sm text-center display-6 me-auto ps-0 ps-lg-3">Room & Suits</h2>
                <ul class="pe-0 pe-lg-5">
                    <li @click="activeBtn='delux'" :class="{active: activeBtn === 'delux' }">DELUXE</li>
                    <li @click="activeBtn='standard'" :class="{active: activeBtn === 'standard' }">STANDART</li>
                    <li @click="activeBtn='studio'" :class="{active: activeBtn === 'studio' }">STUDIO</li>
                </ul>
            </div>

            <div class="container row mx-auto px-5 my-5 mt-1">

                <div class="col-lg-5 col-md-6 col-12 cards fromlefts">
                    <div class="d-flex justify-content-between">
                        <div class="roomimgs">
                            <img src="../assets/img/gallery/1.jpg" class="img-fluid" />
                        </div>
                        <div class="roomtexts ms-auto">
                            <ul>
                                <li>Delux Room</li>
                                <li><font-awesome-icon icon="fa-user-friends"></font-awesome-icon> 4 people</li>
                                <li><font-awesome-icon icon="fa-wine-glass"></font-awesome-icon> Breakfast</li>
                                <li><font-awesome-icon icon="fa-dollar-sign"></font-awesome-icon> 20</li>
                                <li><button class="btn btn-outline-dark btn-sm mt-1">Book Now</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-5 col-md-6 col-12 cards fromlefts">
                    <div class="d-flex justify-content-between">
                        <div class="roomimgs">
                            <img src="../assets/img/gallery/1.jpg" class="img-fluid" />
                        </div>
                        <div class="roomtexts ms-auto">
                            <ul>
                                <li>Delux Room</li>
                                <li><font-awesome-icon icon="fa-user-friends"></font-awesome-icon> 4 people</li>
                                <li><font-awesome-icon icon="fa-wine-glass"></font-awesome-icon> Breakfast</li>
                                <li><font-awesome-icon icon="fa-dollar-sign"></font-awesome-icon> 20</li>
                                <li><button class="btn btn-outline-dark btn-sm mt-1">Book Now</button></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-lg-5 col-md-6 col-12 cards fromlefts">
                    <div class="d-flex justify-content-between">
                        <div class="roomimgs">
                            <img src="../assets/img/gallery/1.jpg" class="img-fluid" />
                        </div>
                        <div class="roomtexts ms-auto">
                            <ul>
                                <li>Delux Room</li>
                                <li><font-awesome-icon icon="fa-user-friends"></font-awesome-icon> 4 people</li>
                                <li><font-awesome-icon icon="fa-wine-glass"></font-awesome-icon> Breakfast</li>
                                <li><font-awesome-icon icon="fa-dollar-sign"></font-awesome-icon> 20</li>
                                <li><button class="btn btn-outline-dark btn-sm mt-1">Book Now</button></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-lg-5 col-md-6 col-12 cards fromlefts">
                    <div class="d-flex justify-content-between">
                        <div class="roomimgs">
                            <img src="../assets/img/gallery/1.jpg" class="img-fluid" />
                        </div>
                        <div class="roomtexts ms-auto">
                            <ul>
                                <li>Delux Room</li>
                                <li><font-awesome-icon icon="fa-user-friends"></font-awesome-icon> 4 people</li>
                                <li><font-awesome-icon icon="fa-wine-glass"></font-awesome-icon> Breakfast</li>
                                <li><font-awesome-icon icon="fa-dollar-sign"></font-awesome-icon> 20</li>
                                <li><button class="btn btn-outline-dark btn-sm mt-1">Book Now</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
                


            </div>

        </div>

    </section>
    
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup(){
        const activeBtn = ref('delux')

        return {activeBtn}
    }
}
</script>

<style>
/* Start Room Section */
.rooms-lists{
    width: 100%;
}

.rooms ul{
    list-style: none;
    display: flex;
    justify-content: center;
    margin:0;
    padding:0;
    margin-right:10%;
}

@media (max-width:700px){
    .rooms ul{
        margin-right: 5%;
    }
}
.roomimgs{
    width: 42%;
    height: auto;
}
.roomtexts{
    width: 57%;
}

@media (max-width:450px){
    .roomtexts{
        width:60%;
    }
}
.roomtexts ul{
    display: block;
}

.rooms ul li{
    margin: 0 20px;
    cursor: pointer;
    align-self: center;
}

.rooms-list li.active{
    color: #23afc2;
    border-bottom: 2px solid #23afc2;
}

.book-cards{
    transition: all 0.4s;
}

.book-cards:hover{
    transform: translateY(-15px);
    box-shadow: 0 10px 10px rgba(0,0,0,0.3);
}

.cards{
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    margin: 1rem;
    transition: all .5s;
}

.cards:hover{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.cards.fromlefts{
    animation: fromleft 1s linear;
}

@keyframes fromleft{
    0%{
        transform: translate(-90px);
        opacity: 0;
    }
    100%{
        transform: translate(0);
        opacity: 1;
    }
}
/* End Room Section */
</style>