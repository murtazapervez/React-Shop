import React from "react";
import { useState } from "react";
import { Navbar, Button, Modal, Container, Row, Col } from "react-bootstrap";
import { products } from "../data";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import CartProducts from "./CartProducts";

export default function NavComponent() {
  const [show, setShow] = useState(false);

  const showHideModal = () => setShow(!show);

  const { item, getTotalCost } = useContext(CartContext);

  const productCounts = item.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">React Store</Navbar.Brand>
        <Navbar.Toggle></Navbar.Toggle>
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={showHideModal}>Cart {productCounts} Items</Button>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={show} onHide={showHideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productCounts > 0 ? 
            <>             
              {
                item.map( (product, indx) => (
                  <>
                    <CartProducts key={indx} id={product.id} quantity={product.quantity} ></CartProducts>
                  </>
                ))
              }
            </> 
          : <h1>Empty Cart</h1>}
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          { productCounts > 0 
          ? <>
            <Row className="justify-content-start">
              <Col>Subtotal:</Col>
              <Col>${ getTotalCost().toFixed(2)}</Col>
            </Row>
            <Button variant="warning" className="float-start">Checkout</Button>

            </> : <></> }
          </Modal.Footer>
      </Modal>

    </>
  );
}
