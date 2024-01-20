export interface User {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

export interface CompanyRegister {
  name: string;
  namePersonContact: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  whatsApp: string;
  priceHour: number | undefined;
  website: string;
  availability: string;
  community: string;
  province: string;
  location: string;
  yearsActive: number | undefined;
  servicesAditionals: Array<string>;
}
