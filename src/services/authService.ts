import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, firebaseEnabled } from './firebase';

// O apelido é a única identificação exposta na interface. No Firebase, ele vira um e-mail interno.
export async function authenticateNickname(nickname: string, password: string, createAccount: boolean): Promise<'firebase' | 'demo'> {
  if (!firebaseEnabled || !auth) return 'demo';
  const email = `${nickname.trim().toLowerCase()}@vangym.app`;
  try {
    if (createAccount) await createUserWithEmailAndPassword(auth, email, password);
    else await signInWithEmailAndPassword(auth, email, password);
    return 'firebase';
  } catch (error) {
    const code = (error as { code?: string }).code;
    if (code === 'auth/email-already-in-use') throw new Error('Esse apelido já está cadastrado.');
    if (code === 'auth/invalid-credential' || code === 'auth/user-not-found' || code === 'auth/wrong-password') throw new Error('Apelido ou senha incorretos.');
    // A experiência continua utilizável sem rede; o perfil local permanece disponível no aparelho.
    return 'demo';
  }
}
