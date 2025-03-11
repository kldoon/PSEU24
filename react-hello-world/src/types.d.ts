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
    inStock: boolean
  }

  interface IForm {
    name: string,
    price: number,
    imageURL: string,
    desc: string,
    inStock: boolean
  }
}