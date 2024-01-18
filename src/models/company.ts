export interface User {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

export interface Company {
  name: string;
  namePersonContact: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  whatsApp: string;
  website: string;
  availability: string;
  community: string;
  province: string;
  location: string;
  price: number;
  yearsActive: number | undefined;
  servicesAditionals: Array<string>;
}
