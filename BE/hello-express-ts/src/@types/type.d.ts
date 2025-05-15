declare namespace Store {
  export interface IUser {
    id: number;
    name: string;
    email: string;
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