import React from 'react'
import { Card, Button, Form, Col, Row } from 'react-bootstrap'
import { CartContext } from '../CartContext'
import { useContext } from 'react';
import ProductRating from './ProductRating';
import ProductVariation from './ProductVariation';

export default function ProductCards(props) {

    const {id, title, price, image, rating, variation} = props.product;
    const cart  = useContext(CartContext)
    const productQuantity = cart.getProductQuantity(id)

    
    return (
    <Card key={id}>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Img src={image} className="product-image" style={{width: "100px", height: "100px"}}/>
            
            <Card.Text>$ {price}</Card.Text>
            {/* <ProductVariation variation={variation}></ProductVariation> */}
            {   productQuantity > 0  ? 
                <>
                    <div className='row justify-content-center'>
                        <Col sm="12">
                            <Button sm="4" className="mx-2" onClick={() => cart.addOneToCart(id)}>+</Button>
                            <Form.Label sm="4" className="mx-2" >{productQuantity}</Form.Label>
                            <Button sm="4" className="mx-2" onClick={() => cart.removeOneFromCart(id)}>-</Button>
                        </Col>
                    </div>
                    <Button variant='danger' className='my-2' onClick={() => cart.deleteFromCart(id)}>Remove</Button>
                </> 
                :  <Button variant="primary" onClick={() => cart.addOneToCart(id)}>Add to Cart</Button>
            }
            <ProductRating rating={rating.rate}></ProductRating>
        </Card.Body>
    </Card>
  )
}
