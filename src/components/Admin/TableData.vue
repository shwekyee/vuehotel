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
<vue-awesome-paginate
    :total-items="50"
    :items-per-page="5"
    :max-pages-shown="5"
    :current-page="1"
    :on-click="onClickHandler"
  />
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

      const onClickHandler = (page) => {
      console.log(page);
      };

      return {datas, onClickHandler}
}}
</script>

<style>
  .pagination-container {
    display: flex;
    column-gap: 10px;
  }
  .paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
  }
  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }
  .active-page {
    background-color: #3498db;
    border: 1px solid #3498db;
    color: white;
  }
  .active-page:hover {
    background-color: #2988c8;
  }
  *, *::before, *::after {
    box-sizing: border-box;
    list-style: none;
}
</style>