import firebase from 'firebase/compat'
import {ref, onUnmouted} from 'vue'

const config = {
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const usersCollection = db.collection('users')

export const createUser = user => {
  return usersCollection.add(user)
}

export const getUser = async id => {
  const user = await usersCollection.doc(id).get()
  return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
  return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
  const users = []
  const close = usersCollection.onSnapshot(snapshot => {
    console.log('loaded', snapshot)
    users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  close()
  // return users

}
