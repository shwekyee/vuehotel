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
  <label for="formFile" class="form-label">Default file input example 
    <span v-if="error">{{error}}</span>
    <span v-if="fileError">{{fileError}}</span>
  </label>
  <input class="form-control" @change="handleChange" name="file" type="file">
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
import useStroage from '@/composables/useStorage'

export default {
    setup(){
        const image = ref(null)
        const fileError = ref(null)
        const router = useRouter()
        const form = ref({
            category: '',
            price:'',
            peopleCount:'',
            title:'',
            createdAt:serverTimestamp(),
            image:null,
            coverUrl:null,
            service:[]
        })
        const { error, add_doc} = useCollection('rooms')
        const { filePath , url, uploadImage} = useStroage()


        const addMenu = async () => {
            await uploadImage(image.value)
            await add_doc({
              ...form.value,
              image:filePath.value,
              coverUrl:url.value
            })
            
            if(!error.value){
                router.push('/#room')
            }
        }


      // allowed file types
      const types = ['image/png', 'image/jpeg', 'image/jpg']
      const handleChange = (e) => {
      let selected = e.target.files[0]
      if (selected && types.includes(selected.type)) {
        image.value = selected
        fileError.value = null
      } else {
        image.value = null
        fileError.value = 'Please select an image file (png or jpg)'
      }
    }
            
        
        return {form, addMenu, error, handleChange, fileError}
    }
}
</script>
<style scoped>

</style>