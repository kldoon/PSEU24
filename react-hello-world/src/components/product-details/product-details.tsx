import { useEffect, useState } from "react";
import { useParams } from "react-router";

type IParams = { id: string, name: string };
interface IProps { products: Store.IProduct[] };

const ProductDetails = ({ products }: IProps) => {
  const params = useParams<IParams>();
  const [product, setProduct] = useState<Store.IProduct | undefined>();

  useEffect(() => {
    const p = products?.find(prod => prod.id === Number(params.id))
    setProduct(p)
  }, [params]);

  return <div>
    <h2>product details <br />{params.id}</h2>
    <h3>{product?.name}</h3>
  </div>
}

export default ProductDetails;
