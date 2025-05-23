import { Button } from '@mui/material';
import './Carousel.css';
import { Link } from 'react-router-dom';
export const ButtonCarousel = ({ id }) => {
  return (
    <Link to={`/products/${id}`}>
      <Button className="buttonCarousel">details</Button>
    </Link>
  );
};
