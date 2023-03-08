import React from 'react';
import Contacts from "./components/contacts/Contacts";
import Product from "./components/product/Product";
import ProductList from './components/product_list/ProductList';

function App() {
  return (
    <div className="contacts_card">
      <Contacts/>
      <Product/>
      <ProductList/>

    </div>
  );
}

export default App;


