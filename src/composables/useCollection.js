import { ref } from 'vue'
import { db, dbFun } from '../firebase/config'

const { collection, addDoc } = dbFun

const useCollection = (collection_) => {
    const error = ref(null)
    const add_doc = async (doc) => {
        try{
            const colRef = await collection(db, collection_)
            addDoc(colRef, doc)
            error.value = null
        }catch(err){
            error.value = err.message
        }
    }

    return { add_doc, error}
}

export default useCollection