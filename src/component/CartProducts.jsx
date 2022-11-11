import React, { useContext } from 'react'
import { Button, Row, Col, Image, Form } from 'react-bootstrap'
import { Trash, TrashFill } from 'react-bootstrap-icons'
import { CartContext } from '../CartContext'
import { getProduct } from '../data'

export default function CartProducts(props) {

    const {id, quantity} = props

    const cart = useContext(CartContext)

    const productDetails = getProduct(id)

    // const productQuantity = cart.getProductQuantity(id)


  return (
    <>
    <Row className='align-items-center mb-4'>
        <Col xs={2}><Image src={productDetails.image} width="50px" height="50px"></Image></Col>
        <Col>{productDetails.title}</Col>
        <Col>$ { (quantity * productDetails.price).toFixed(2) }</Col>
        <Col xs={1}><TrashFill onClick={() => cart.deleteFromCart(id)}></TrashFill></Col>
        <Col xs={3} className="d-flex align-items-center">
            <Button className="float-start" onClick={() => cart.addOneToCart(id)}>+</Button>
            <Form.Label style={{margin:"10px"}}>{quantity}</Form.Label>
            <Button className="float-end" onClick={() => cart.removeOneFromCart(id)}>-</Button>
        </Col>
    </Row>
    </>
  )
}
