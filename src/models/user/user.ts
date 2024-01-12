export interface Token {
  token: string;
}

export interface UserInfo extends Token {
  name: string;
  lastName: string;
  email: string;
  age: number;
  community: string;
  province: string;
  location: string;
  id: string;
  experience: string;
  move: string;
  token: string;
}

export interface User {
  loading?: boolean;
  userInfo: UserInfo;
  error?: string | null;
  success?: boolean;
}
