import { ref,watchEffect } from 'vue'
import { db, dbFun } from '../firebase/config'

const { collection, 
        orderBy, 
        onSnapshot, 
        query,
        } = dbFun

const getCollection = (collection_, query_) =>{
    let error = ref(null)
    let documents = ref(null)
    let isPending = ref(false)

    const colRef = collection(db, collection_)
    const q = query(colRef, orderBy(query_, 'desc'))

    isPending.value = true

    const unsub = onSnapshot(q , snapshot => {
        let results = []
        snapshot.docs.forEach( doc => {
            results.push({...doc.data(), id:doc.id}) 
        })
        isPending.value = false
        documents.value = results
        error.value = null
    }, err => {
        documents.value = null
        isPending.value = false
        error.value = 'could not fetch the data' + err.message
    })


    watchEffect((onInvalidate) => {
        // unsub from prev collection when watcher is stopped (component unmounted)
        onInvalidate(() => unsub());
      });

    return {documents, error, isPending}
}

export default getCollection