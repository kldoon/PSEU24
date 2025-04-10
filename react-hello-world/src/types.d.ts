declare namespace Store {
  interface ICategory {
    id: string;
    title: string;
    link: string;
    image?: string;
  }

  interface IProduct {
    id: number,
    name: string,
    price: number,
    imageURL: string,
    wishListCounter: number,
    desc: string,
    inStock: boolean;
    category: string;
  }

  interface IForm {
    name: string,
    price: number,
    imageURL: string,
    desc: string,
    inStock: boolean
  }

  type ICart = Array<{
    id: number;
    count: number;
  }>;

  interface IUser {
    username: string;
    role: 'admin' | 'user';
  }
}