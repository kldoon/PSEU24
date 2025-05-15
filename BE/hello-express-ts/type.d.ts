declare namespace Store {
  export interface IUser {
    id: number;
    name: string;
    email: string;
    role: "Admin" | "Moderator" | "User" | "Guest";
    isActive: boolean;

  }

  export interface IGetUserByEmailRequest {
    email: string;
  }

  export interface IGetUserByIdRequest {
    id: string;
  }
}