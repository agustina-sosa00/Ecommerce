import React from 'react';
import './ProductsById.css';
import { ImageProd } from './ImageProd';
import { DetailsProd } from './DetailsProd';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ProductsById = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products.products);
  const product = products.find((p) => p.id === Number(id));
  console.log(product);
  return (
    <div className="container-productById">
      <DetailsProd
        titleProd={product.title}
        description={product.description}
        price={product.price}
        category={product.category}
      />
      <ImageProd image={product.image} />
    </div>
  );
};

// por que usar find? find devuelve el primer objeto que hace match con la condicion.
// Y utilizar filter(), me devuelve un array
