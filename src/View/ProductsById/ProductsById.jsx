import React from 'react';
import './ProductsById.css';
import { ImageProd } from './ImageProd';
import { DetailsProd } from './DetailsProd';
import { useParams } from 'react-router-dom';
import { useProductsContext } from '../../Context/productsContext';
import { Divide } from '../../Components/Divide';

export const ProductsById = () => {
  const { id } = useParams();
  const { productsContext } = useProductsContext();
  const product = productsContext?.find((p) => p.id === Number(id));

  console.log(productsContext);
  return (
    <div className="container-productById">
      <DetailsProd
        titleProd={product?.title}
        description={product?.description}
        price={product?.price}
        category={product?.category}
      />
      {/* <Divide classWidth={false} /> */}
      <ImageProd image={product?.image} />
    </div>
  );
};

// por que usar find? find devuelve el primer objeto que hace match con la condicion.
// Y utilizar filter(), me devuelve un array
