import ProductForm from '../../components/product-form/ProductForm';
import useAddProduct from '../../hooks/add-product.hook';

interface IProps {
  onAdd: (product: Store.IProduct) => void;
}

const AddProductPage = (props: IProps) => {
  const INITIAL_FORM: Store.IForm = { name: '', price: 0, imageURL: '', desc: '', inStock: true, category: '' };
  const { handleSubmit, errorsList } = useAddProduct(INITIAL_FORM, props.onAdd);

  return (
    <ProductForm
      INITIAL_FORM={INITIAL_FORM}
      errorsList={errorsList}
      handleSubmit={handleSubmit}
    />
  )
}

export default AddProductPage;