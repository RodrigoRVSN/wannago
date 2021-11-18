import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useState,
} from 'react';
import firebase from '../config/firebase';

export interface IUser {
  user_id: string;
  name: string;
  email: string;
  picture: string;
}

export interface IAuthContextData {
  user: firebase.default.User | null;
  setUser: Dispatch<SetStateAction<firebase.default.User | null>>;
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
      await response.user.getIdToken().then(token => {
        setCookie(undefined, '@wannago_token', token);
      });
      router.push('/application');
    }
  }, [router]);

  return (
    <AuthContextData.Provider value={{ handleSignInGoogle, user, setUser }}>
      {children}
    </AuthContextData.Provider>
  );
}