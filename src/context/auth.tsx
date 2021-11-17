import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import { createContext, ReactNode, useCallback, useState } from 'react';
import firebase from '../config/firebase';

export interface IAuthContextData {
  user: firebase.default.User | null;
  handleSignInGoogle: () => void;
}

export const AuthContextData = createContext({} as IAuthContextData);

interface IAuthProvider {
  children: ReactNode;
}

export function AuthProvider({ children }: IAuthProvider): JSX.Element {
  const [user, setUser] = useState<firebase.default.User | null>(null);
  const router = useRouter();

  const handleSignInGoogle = useCallback(async () => {
    const response = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());
    if (response.user) {
      setUser(response.user);
      // todo: persistir usuário com getTokenId()
      setCookie(undefined, '@wannago_token', response.user.refreshToken);
      router.push('/application');
    }
  }, [router]);

  return (
    <AuthContextData.Provider value={{ handleSignInGoogle, user }}>
      {children}
    </AuthContextData.Provider>
  );
}
