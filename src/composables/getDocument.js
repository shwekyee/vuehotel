import { watchEffect, ref } from 'vue'
import { dbFun, db } from '../firebase/config'

const { doc, onSnapshot } = dbFun
const getDocument = (collection, id) => {

  let document = ref(null)
  let error = ref(null)

  // register the firestore collection reference
  let documentRef = doc(db, collection, id)

  const unsub = onSnapshot(documentRef ,doc => {
    // need to make sure the doc exists & has data
    if(doc.data()) {
      document.value = {...doc.data(), id: doc.id}
      error.value = null
    }
    else {
      error.value = 'that document does not exist'
    }
  }
  , err => {
    console.log(err.message)
    error.value = 'problem fetching the document'
  })

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub())
  });

  return { error, document }

  }

export default getDocument