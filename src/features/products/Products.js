import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { loadProdsAsync, prodsInfo } from './productsSlicer';

const Shop = () => {
  const MY_SERVER = 'http://127.0.0.1:8000'
  const dispatch = useDispatch();
  const prods = useSelector(prodsInfo);
  
  useEffect(() => {
      dispatch(loadProdsAsync());
  }, []);

  return (
    <Container>
      <h1 className="mt-5 mb-3">Shop</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {prods && prods.map(product => (
          <Col key={product.id}>
            <Card>
              <Card.Img variant="top" height='300px' src={`${MY_SERVER}${product.image}`} alt={product.title} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.title}</Card.Text>
                <Card.Text>Price: ₪{product.price}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Shop;
