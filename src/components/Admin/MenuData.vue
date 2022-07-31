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
      <th scope="col">
         {{error}}
      </th>
    </tr>
  </thead>
  <h1 v-if="isPending">Loading</h1>
  <tbody v-for="(data,idx) in fetchDatas" :key="data.id">
    <tr>
      <th scope="row">{{++idx}}</th>
      <td>{{data.category}}</td>
      <td>
        <img class="dataimgs" :src="data.coverUrl">
      </td>
      <td>{{data.peopleCount}}</td>
      <td>{{data.price}} $</td>
      <td>
        <span v-for="(i,d) in data.service" :key="d">{{ i + ", " }}</span>
      </td>
      <td>
        <button class="btn btn-outline-primary btn-sm me-1">
          Edit
        </button>
        <button class="btn btn-outline-success btn-sm me-1">
          Detail
        </button>
        <button class="btn btn-outline-danger btn-sm">
          Delete
        </button>
      </td>
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
import getCollection from '@/composables/getCollection';
import { computed } from 'vue'

export default {
    setup(){
      
      //Pagination
      const onClickHandler = (page) => {
      console.log(page);
      };

      //get Data from firebase
      let { documents, error, isPending } = getCollection('rooms', 'price')

      // eslint-disable-next-line vue/return-in-computed-property
      const fetchDatas = computed( ()=> {
            if(documents.value){
            return  documents.value.map( doc => {
                    return {...doc}
                })
            }
        })

      return {onClickHandler, fetchDatas, error, isPending}
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
.dataimgs{
  width:20px !important;
  height:20px !important;
  object-fit: cover;
}
</style>