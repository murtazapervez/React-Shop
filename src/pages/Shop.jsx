import React from "react";
import { useState } from "react";
import { Row, Col, Modal } from "react-bootstrap";
import { CartContext } from "../CartContext";
import ProductCards from "../component/ProductCards";
import { products } from "../data";


export default function Shop() {



  return (
    <div>
      <h1>Welcome to Our Store!</h1>
      <Row xs={1} md={3} className="g-4 mt-4">

        {products.map( (prod, index) => (
          <Col align="center" key={index}>
            <ProductCards product={prod}></ProductCards>
          </Col>
        ))}
      </Row>
    </div>
  );
}
