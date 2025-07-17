declare namespace Store {
  interface IProduct {
    id: number;
    name: string;
    price: number;
    imageURL: string;
    wishListCounter: number;
    desc: string;
    inStock: boolean;
    category: string;
  }

  export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    role: "Admin" | "Moderator" | "User" | "Guest";
    isActive: boolean;
  }

  export interface IGetUserByEmailRequestParams {
    email: string;
  }

  export interface IGetUserByIdRequestParams {
    id: string;
  }

  export interface IGetUsersQueryPayload {
    id?: string;
    nameQ?: string;
    email?: string;
  }
} 