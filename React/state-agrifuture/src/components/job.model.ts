export interface Job {
  _id: string;
  index: number;
  isFavorit: boolean;
  name: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  about: string;
  tags: string[];
  friends: { id: number; name: string }[];
}
