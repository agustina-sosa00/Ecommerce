import React from 'react';
import { CardProducts } from '../Products/CardProducts';
import { CardSeeMore } from './CardSeeMore';

export const BoxCategoriesProd = ({
  titleCat,
  products,
  handle,
  handleAdd,
}) => {
  return (
    <div className="box-categories">
      <h1 className="title-categories">{titleCat}</h1>

      {products.length > 0 ? (
        <div className="boxCardProd">
          {products.map((p) => (
            <CardProducts
              key={p.id}
              image={p.image}
              title={p.title}
              price={p.price}
              id={p.id}
              handle={handleAdd}
            />
          ))}

          <CardSeeMore handle={handle} />
        </div>
      ) : (
        <div className="emptyBox">No hay productos para esta categoria</div>
      )}
    </div>
  );
};
