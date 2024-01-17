export interface User {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

export interface Provider extends User {
  namePersonContact: string;
  community: string;
  province: string;
  location: string;
  password: string;
}
