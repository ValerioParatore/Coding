export interface IUser {
  id:number;
  nome:string;
  cognome:string;
  email:string;
}


export interface IRegister {
  nome:string;
  cognome:string;
  email:string;
  password:string;
}

export interface ILogin {
  email:string;
  password:string;
}

export interface IAccessData {
  accessToken: string;
  user:IUser
}
