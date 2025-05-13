import React from 'react';
import './ProductsById.css';
import { ImageProd } from './ImageProd';
import { DetailsProd } from './DetailsProd';
import { useParams } from 'react-router-dom';
import { useProductsContext } from '../../Context/productsContext';
import { useCart } from '../../Context/cartContext';
import { productsInCart } from '../../Utils/productsInCart';
// import { modalAlert } from '../../Utils/modalAlert';
export const ProductsById = () => {
  const { id } = useParams();
  const { productsContext } = useProductsContext();
  const product = productsContext?.find((p) => p.id === Number(id));
  const { cart, setCart } = useCart();
  const handleAddToCart = () => {
    // modalAlert(text={'¿Desea agregar el producto al carrito?'});
    const prodInCart = productsInCart(cart, product?.id);
    if (prodInCart) {
      return;
    } else {
      setCart([...cart, product]);
    }
  };
  return (
    <div className="container-productById">
      <ImageProd image={product?.image} />
      <DetailsProd
        handleButton={handleAddToCart}
        titleProd={product?.title}
        description={product?.description}
        price={product?.price}
        category={product?.category}
      />
    </div>
  );
};

// por que usar find? find devuelve el primer objeto que hace match con la condicion.
// Y utilizar filter(), me devuelve un array
