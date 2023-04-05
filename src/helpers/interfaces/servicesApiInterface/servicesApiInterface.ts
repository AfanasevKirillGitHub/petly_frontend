export interface IServicessApi {
  massege: string;
  services: [];
}

export interface IServices {
  address: ILang;
  name: ILang;
  time: string;
  email: string;
  _id: string;
  phone: string;
}

interface ILang {
  en?: string;
  ua?: string;
}
