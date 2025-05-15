import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { sendOrder } from '../../Utils/sendOrder';
import { formatPrice } from '../../Utils/formatPrice';

export const ButtonWhatsapp = ({ order, total }) => {
  const handleSendOrder = () => {
    const result = sendOrder({ order, total });
    const message = encodeURIComponent(result + `TOTAL: ${formatPrice(total)}`);
    window.open(`https://wa.me/5491165149673?text=${message}`, '_blank');
  };
  return (
    <button className="buttonWhatsapp" onClick={handleSendOrder}>
      Enviar pedido <FaWhatsapp />
    </button>
  );
};
