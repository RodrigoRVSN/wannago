import { useRouter } from 'next/router';
import { destroyCookie, setCookie } from 'nookies';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useState,
} from 'react';
import firebase, { auth } from '../config/firebase';

export interface IUser {
  user_id: string;
  name: string;
  email: string;
  picture: string;
}

export interface IAuthContextData {
  user: firebase.default.User | null;
  setUser: Dispatch<SetStateAction<firebase.default.User | null>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  handleSignInGoogle: () => void;
  handleSignOut: () => void;
}

export const AuthContextData = createContext({} as IAuthContextData);

interface IAuthProvider {
  children: ReactNode;
}

export function AuthProvider({ children }: IAuthProvider): JSX.Element {
  const [user, setUser] = useState<firebase.default.User | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignInGoogle = useCallback(async () => {
    setLoading(true);
    const response = await auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
    if (response.user) {
      setUser(response.user);
      await response.user.getIdToken().then(token => {
        setCookie(undefined, '@wannago_token', token);
      });
      router.push('/application');
      setLoading(false);
    }
  }, [router]);

  const handleSignOut = useCallback(async () => {
    setLoading(true);
    await auth.signOut();
    router.push('/');
    destroyCookie(undefined, '@wannago_token');
    setUser({} as firebase.default.User | null);
    setLoading(false);
  }, [router]);

  return (
    <AuthContextData.Provider
      value={{
        handleSignInGoogle,
        handleSignOut,
        loading,
        setLoading,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContextData.Provider>
  );
}
