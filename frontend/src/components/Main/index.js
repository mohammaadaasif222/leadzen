import React, { useState } from "react";
import "./Main.css";
import ItemBar from "./ItemBar";
import Card from "./Card";
import { useDispatch,  } from "react-redux";
import { Form, Input, Button } from "reactstrap";
import {
  fetchProducts,
  searchProduct,
} from "../../redux/features/productsSlice";

const Main = ({ result }) => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = React.useState("");
  // const searchResults = useSelector((state) => state.result);

  const handleSearch=()=>{
    dispatch(searchProduct(searchTerm));
  }
  // Update searchTerm when the input value changes
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
     
    dispatch(searchProduct(event.target.value));
  };

  console.log(result);
  return (
    <div className="col-md-8 mt-5 m-auto">
      <ItemBar data={result.length} />
      
      <Input
       style={{width:'88%', display:'inline', margin:'1rem auto', padding:'1.5rem'}}
        type="text"
        placeholder="search name..."
        value={searchTerm}
        onInput={handleInputChange}
      ></Input>
      <Button type="submit" className="btn btn-primary ml-2 " style={{padding:'0.7rem', borderRadius:'8px !important'}} onClick={handleSearch}>
        search
      </Button>
      <p className="text-danger">Result Found ({result.length})</p>

      <div className="row">
        {result
          ? result.map((product, index) => <Card key={index}>{product}</Card>)
          : null}
      </div>
    </div>
  );
};
export default Main;
