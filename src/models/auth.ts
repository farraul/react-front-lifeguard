export interface SignIn {
  email: string;
  password: string;
  remember?: boolean;
}

export interface SignUp {
  name: string;
  lastName: string;
  email: string;
  age: number;
  community: string;
  province: string;
  location: string;
  experience: string;
  move: string;
  password: string;
  confirmPassword: string;
}
