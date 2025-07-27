interface Cast {
  id: number;
  name: string;
  profile_path: string;
}
  
export interface Credits {
  cast: Cast[];
}