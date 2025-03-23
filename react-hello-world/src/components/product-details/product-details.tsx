import { useEffect, useState } from "react";
import { useParams } from "react-router"

const ProductDetails = ({ products }: { products: Store.IProduct[] }) => {
  const params: any = useParams();
  const [product, setProduct] = useState<Store.IProduct | undefined>()

  useEffect(() => {
    const p = products?.find(prod => prod.id == params.id)
    setProduct(p)
    console.log(p)
  }, [params])
  console.log(params);
  return <div>
    <h2>product details <br />{params.id}</h2>
    <h3>{product?.name}</h3>
  </div>
}

export default ProductDetails;
