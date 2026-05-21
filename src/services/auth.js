import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import { auth } from './firebase';

export const authService = {
  validatePassword: (pwd) => pwd && pwd.length >= 6,

  signUp: async (email, password, name) => {
    if (!authService.validatePassword(password)) {
      throw new Error('Senha deve ter no mínimo 6 caracteres.');
    }
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      return { uid: cred.user.uid, email: cred.user.email, name };
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        throw new Error('Este e-mail já está cadastrado.');
      }
      throw error;
    }
  },

  login: (email, password) => signInWithEmailAndPassword(auth, email, password),
  logout: () => signOut(auth),
  subscribeAuth: (callback) => onAuthStateChanged(auth, callback)
};