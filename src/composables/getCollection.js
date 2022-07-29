import { ref,watchEffect } from 'vue'
import { db, dbFun } from '../firebase/config'

const { collection, 
        orderBy, 
        onSnapshot, 
        query,
        limit,
        startAt} = dbFun

const getCollection = (collection_, query_, limit_ = 10, startAt_ = 1) =>{
    let error = ref(null)
    let documents = ref(null)

    const colRef = collection(db, collection_)
    const q = query(colRef, orderBy(query_, 'desc'), limit(limit_), startAt(startAt_))

    const unsub = onSnapshot(q , snapshot => {
        let results = []
        snapshot.docs.forEach( doc => {
            doc.data().price && results.push({...doc.data(), id:doc.id}) 
        })

        documents.value = results
        error.value = null
    }, err => {
        documents.value = null
        error.value = 'could not fetch the data' + err.message
    })


    watchEffect((onInvalidate) => {
        // unsub from prev collection when watcher is stopped (component unmounted)
        onInvalidate(() => unsub());
      });
}

export default getCollection