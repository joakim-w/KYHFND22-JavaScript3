import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { auth, googleProvider } from '../../../firebase/config'


const signup = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password)
  const user = {
    uid: userCredential.user.uid,
    email: userCredential.user.email
  }
  return user
}

const login = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password)
  const user = {
    uid: userCredential.user.uid,
    email: userCredential.user.email
  }
  return user
}

const logout = async () => {
  return await signOut(auth)
}


const signInWithGoogle = async () => {
  const userCredential = await signInWithPopup(auth, googleProvider)
  if(!userCredential) throw new Error('Could not complete signup')

  console.log(userCredential)
  const user = {
    uid: userCredential.user.uid,
    email: userCredential.user.email
  }
  return user
}

const authService = {
  signup,
  login,
  logout,
  signInWithGoogle
}

export default authService