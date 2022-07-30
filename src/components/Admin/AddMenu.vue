<template>
  <form @submit.prevent class="mt-2">
    <div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Category</label>
    <select v-model="form.category" class="form-select">
        <option value="Delux">Delux</option>
        <option value="Standard">Standard</option>
        <option value="Studio">Studio</option>
    </select>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Title</label>
  <input v-model="form.title" type="text" class="form-control" id="formGroupExampleInput2" placeholder="Title">
</div>
<div class="mb-3">
  <label for="formFile" class="form-label">Default file input example</label>
  <input class="form-control" type="file" id="formFile">
</div>
<div class="mb-3">
  <label for="formGroupExampleInput3" class="form-label">Price</label>
  <input v-model.number="form.price" type="number" class="form-control" id="formGroupExampleInput3" placeholder="Price">
</div>
<div class="mb-3">
  <label for="formGroupExampleInput4" class="form-label">People Count</label>
  <input v-model.number="form.peopleCount" type="number" class="form-control" id="formGroupExampleInput4" placeholder="People Count">
</div>
<p class="mb-0">Service</p>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Breakfast" id="flexCheckDefault" v-model="form.service"
   checked>
  <label class="form-check-label" for="flexCheckDefault">
    Breakfast
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Message" id="flexCheckChecked" v-model="form.service"
  >
  <label class="form-check-label" for="flexCheckChecked">
    Message
  </label>
</div>
</form>
<button @click="addMenu" type="submit" class="btn btn-outline-dark mx-auto d-block mt-3">Add Menu</button>
</template>

<script>
import { ref } from '@vue/reactivity'
import { serverTimestamp } from '../../firebase/config'
import useCollection from '../../composables/useCollection'
import { useRouter } from 'vue-router'

export default {
    setup(){
        const img = ref(null)
        const form =ref({
            category: '',
            price:'',
            peopleCount:'',
            title:'',
            createdAt:serverTimestamp(),
            Image:img.value,
            service:[]
        })
        const { error, add_doc} = useCollection('rooms')
        const router = useRouter()

        const addMenu = async () => {
            await add_doc(form.value)
            console.log(error.value)
            if(!error.vaue){
                router.push({name:"adminpanel"})
            }
        }
            
        
        return {form, img, addMenu, error}
    }
}
</script>
<style scoped>

</style>