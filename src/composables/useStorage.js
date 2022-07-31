import { storage, storageFun } from '../firebase/config'
import { ref } from 'vue'

const { uploadBytes, getDownloadURL} = storageFun

const useStroage = () => {
    const errorUpload = ref(null)
    const url = ref(null)
    const filePath = ref(null)

    const uploadImage = async (file) => {
        filePath.value = `images/${file.name}`
        const storageRef = storageFun.ref(storage, filePath.value)

        try{
            const res = await uploadBytes(storageRef, file)
            console.log(res)
            url.value = await getDownloadURL(storageFun.ref(storage,res))
            errorUpload.value = null
        }catch(err){
            errorUpload.value = err.message
            console.log(err.message)
        }
    }

    return { uploadImage, url, filePath, errorUpload }
} 

export default useStroage