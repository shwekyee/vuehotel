<template>

  <table class="table">
  <h1 v-if="isPending">Loading</h1>
  <tbody v-for="(data,idx) in fetchDatas" :key="data.id">
    <tr>
      <th scope="row">{{++idx}}</th>
      <td>{{data.category}}</td>
      <td>{{data.title}}</td>
      <td>
        <img class="dataimgs" :src="data.coverUrl">
      </td>
      <td>{{data.peopleCount}}</td>
      <td>{{data.price}} $</td>
      <td>
        <span v-for="(i,d) in data.service" :key="d">{{ i + ", " }}</span>
      </td>
      <td>
        <button @click="editData(data.id)" class="btn btn-outline-primary btn-sm me-1">
          Edit
        </button>
        <!-- <button class="btn btn-outline-success btn-sm me-1">
          Detail
        </button> -->
        <button @click="deleteData(data.id, data.image)" class="btn btn-outline-danger btn-sm">
          Delete
        </button> 
      </td>
    </tr>
  </tbody>
</table>
<!-- <vue-awesome-paginate
    :total-items="50"
    :items-per-page="8"
    :max-pages-shown="5"
    :current-page="1"
    :on-click="onClickHandler"
  /> -->
</template>

<script>
import getCollection from '@/composables/getCollection';
import { computed } from 'vue'
import { useRouter } from 'vue-router';
import useStroage from '@/composables/useStorage';
import useDocument from '@/composables/useDocument';
import { useStore } from 'vuex'



export default {
    setup(){
      const router = useRouter()
      
      const store = useStore()
      const search = computed( () => store.state.searchTitle)
      
      //get Data from firebase
      let { error, isPending, fetchAll, documents } = getCollection('rooms')
      
      
      fetchAll('createdAt')
      
      // eslint-disable-next-line vue/return-in-computed-property
      const fetchDatas = computed( ()=> {
           if(documents.value){
            return documents.value.filter( doc => {
            return doc.category.toLowerCase().includes(search.value.toLowerCase())
           })
           }
      })

      


      
      //edit data
      const editData = (id) => {
          router.push({name:'editmenu', params:{id}})
      }

      //delete data
      const deleteData = async (id, image) => {
          const { deletedoc } = useDocument('rooms', id)
          const { deleteImage } = useStroage()
          console.log(id,image)
          await deletedoc()
          await deleteImage(image)
          fetchAll('createdAt')
      }

      return {
              fetchDatas,     
              error, 
              isPending,
              editData,
              deleteData,
              }
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
  width:35px !important;
  height:35px !important;
  object-fit: cover;
}
.tableTitles{
  position:fixed;
  left:3.5rem;
}
@media (min-width: 990px) {
  .tableTitles{
  position:fixed;
  left:12.75rem;
  }
}
.tableTitles > :not(caption) > * > * {
    padding: 0.5rem 0.5rem;
    background-color: var(--bs-table-bg);
    border-bottom-width: 1px;
    box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
}
tbody{
  margin-top:100px;
}
</style>