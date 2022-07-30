import { storage, storageFun } from '../firebase/config'



const { uploadBytes,ref, getDownloadURL} = storageFun

const useStroage = () => {
    let error 
    let url
    let filePath 

    const uploadImage = async (file) => {
        filePath = `images/${file}`
        const storageRef = ref(storage, filePath)

        try{
            const res = await uploadBytes(storageRef, file)
            console.log(res)
            url = await getDownloadURL(ref(storage,res))
        }catch(err){
            error = err.message
            console.log(err.message)
        }
    }

    return { uploadImage, url, filePath, error }
} 

export default useStroage