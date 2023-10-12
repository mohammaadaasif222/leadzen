import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  const [show, setShow] = useState(false);
  return (
    <div className="card pt-3 border m-2">
    <div className="row">
      <div className="col-md-6">
      <div className="card-body">
        <h5 className="card-title mb-3 mt-3  ">SYMBOL - {props.children.symbol.toUpperCase()}</h5>
        <h6 className="card-subtitle my-3 bg-light p-2 ">
          NAME - {props.children.id}
        </h6>
        <p className="card-text bg-light my-3 p-2">
          Current Price   ${props.children.current_price}
        </p>
        <p className="card-text bg-light my-3 p-2">
          Total Volume - {props.children.total_volume}
        </p>
        <button className="btn btn-primary" onClick={() => setShow(!show)}>
          More information
        </button>
      </div> 
  
      </div>
      <div className="col-md-6 d-flex justify-content-center align-items-center">
      <img  src={props.children.image} className="w-10" />
      </div>
    </div>
     
      {show && (
        <div class="card border mb-3">
          <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted p-2">Additional Information</h6>
            <span class="card-text bg-light m-2 p-2 text-muted">
             Market Capture: <span className="text-dark">{props.children.market_cap}</span>
            </span>
            <span class="card-text bg-light m-2 p-2 text-muted">
              Price Change 24 Hours: <span className="text-dark">{props.children.price_change_24h}</span>
            </span>
            <p class="card-text bg-light  m-2 p-2">
              Rank:  {props.children.market_cap_rank}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Card;
