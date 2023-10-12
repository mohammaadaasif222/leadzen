import React from "react";
import "../ItemBar/itembar.css";
const ItemBar = (props) => {
  return (
    <>
      <div className="container filter-box">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">{props.data} Items</div>
          <div className="col-md-6 text-right">
          
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemBar;
