<template>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Category</th>
      <th scope="col">Image</th>
      <th scope="col">People Count</th>
      <th scope="col">Price</th>
      <th scope="col">Service</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody v-for="data in datas" :key="data.id">
    <tr>
      <th scope="row">{{data.id}}</th>
      <td>{{data.category}}</td>
      <td>
        <img width="150px" :src="data.img" alt="">
      </td>
      <td>{{data.peopleCount}}</td>
      <td>{{data.price}} $</td>
      <td>{{data.service.forEach( service => service)}}</td>
    </tr>
  </tbody>
</table>
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>

</template>

<script>
export default {
    setup(){
        const datas =[
            {
                id:1,
                category:'delux',
                img:'../../assets/img/gallery/1.jpg',
                peopleCount:2,
                price:20,
                service:['breakfast'],
            },
            {
                id:2,
                category:'standard',
                img:'../../assets/img/gallery/1.jpg',
                peopleCount:2,
                price:20,
                service:['breakfast'],
            },
            {
                id:3,
                category:'standard',
                img:'../../assets/img/gallery/1.jpg',
                peopleCount:2,
                price:20,
                service:['breakfast'],
            },
            {
                id:4,
                category:'standard',
                img:'../../assets/img/gallery/1.jpg',
                peopleCount:2,
                price:20,
                service:['breakfast'],
            }
        ]

        //Pagination
        

        return {datas}
    }
}
</script>

<style>

</style>