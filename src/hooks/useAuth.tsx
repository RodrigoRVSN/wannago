import { useContext } from 'react';
import { AuthContextData, IAuthContextData } from '../context/auth';

export default function useAuth(): IAuthContextData {
  const auth = useContext(AuthContextData);
  return auth;
}
