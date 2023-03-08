//react components
import Product from '../product/Product';
//style
import './ProductsList.css';
///duomenys
import data from '../../data/data';

const ProductList = () => {

  console.log(data, "papa element");

  return (
    <div>
      <Product items={data} />

    </div>
  )
}

export default ProductList