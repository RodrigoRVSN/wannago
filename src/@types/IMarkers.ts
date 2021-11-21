export interface IMarkers {
  id: string;
  company: string;
  coord: {
    lat: number;
    lng: number;
  };
  local: string;
  reasons: string;
  user: {
    displayName: string;
    email: string;
    photoURL: string;
    uid: string;
  };
}
