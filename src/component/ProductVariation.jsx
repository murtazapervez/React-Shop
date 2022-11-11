import React, { Component } from "react";
import { Col, Form, Row } from "react-bootstrap";


export default function ProductVariation(props) {

  const { variation } = props

  return (
    <>
      <div className="row">
       
        {Object.keys(variation).map((key, index) => {
          return (
              <div key={key} className="variations align-items-center">
                <div className="col d-flex justify-content-center align-items-center">
                <h6>{key.charAt(0).toUpperCase() + key.slice(1)}</h6>

                  <ul className="d-flex justify-content-center mb-0" style={{flexWrap:'wrap'}}>
                    {
                      (variation[key]).map((x, idx) => {
                        return (<li key={idx}>
                          <Form.Check type="radio" name={key} label={x} className="checkbox" />
                        </li>)
                      })
                      

                    }

                  </ul>
                </div>
              </div>
          );
        })}

      </div>
    </>
  )
}

