import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const cardStyle = {
    width: '18rem',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', 
  };

  const imgStyle = {
    height: '200px',
    padding: '10px' 
  };

  return (
    <div className="d-flex align-items-stretch">
      <Card style={cardStyle}>
        <Card.Img variant="top" src={product.image} style={imgStyle} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.title}</Card.Text>
          <Card.Text>Price: ${product.price}</Card.Text>
          <Link to={`/products/${product.id}`} className='text-success '>More Details</Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
