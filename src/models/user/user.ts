export interface Token {
  token: string;
}

export interface UserInfo extends Token {
  _id: string;
  firstName: string;
  email: string;
}

export interface User {
  loading?: boolean;
  userInfo: UserInfo;
  error?: string | null;
  success?: boolean;
}
