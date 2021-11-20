import { IUser } from '../context/auth';

export interface IMarkers {
  id: string;
  company: string;
  coord: {
    lat: number;
    lng: number;
  };
  local: string;
  reasons: string;
  user: IUser;
}
