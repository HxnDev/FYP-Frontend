import React from 'react';
import ProductDesc from './ProductsDesc';
import { productObjOne } from './Data';
import ServicesList from './ServicesList';

function Products() {
  return (
    <>
      <ProductDesc {...productObjOne} />
      <ServicesList /> 
    </>
  );
}

export default Products;