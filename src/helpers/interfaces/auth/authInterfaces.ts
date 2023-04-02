export interface ICredentials {
  name?: string;
  password: string;
  email: string;
}

export interface IAuth {
  message: string;
  dataUser: {
    name: string;
    email: string;
    token: string;
  };
}
