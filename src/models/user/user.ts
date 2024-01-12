export interface Token {
  token: string;
}

export interface UserInfo extends Token {
  id: string;
  name: string;
  lastName: string;
  email: string;
  age: number;
  location: string;
  experience: string;
}

export interface User {
  loading?: boolean;
  userInfo: UserInfo;
  error?: string | null;
  success?: boolean;
}
