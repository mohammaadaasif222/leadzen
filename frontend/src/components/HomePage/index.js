import React, { useEffect, useState } from "react";
import Main from "../Main";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setProducts } from "../../redux/features/productsSlice";
import "react-responsive-pagination/themes/classic.css";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const HomePage = () => {
  const { result } = useSelector((state) => state.data);
  const [currentPage, setCurrentPage] = React.useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = result ? result : [];
  const itemsPerPage = 10; 
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageClick = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container-fluid  pb-5">
      <div className="container-fluid pl-5 pr-5">
        <div className="row mt-5">
          <Main result={currentItems} />
        </div>
      </div>

      {/* Pagination */}
      <Pagination className="d-flex justify-content-center align-items-center py-3">
        <PaginationItem disabled={currentPage === 1}>
          <PaginationLink previous onClick={() => handlePageClick(currentPage - 1)} />
        </PaginationItem>
        {[...Array(totalPages).keys()].map((page) => (
          <PaginationItem key={page} active={page + 1 === currentPage}>
            <PaginationLink onClick={() => handlePageClick(page + 1)}>
              {page + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem disabled={currentPage === totalPages}>
          <PaginationLink next onClick={() => handlePageClick(currentPage + 1)} />
        </PaginationItem>
      </Pagination>
    </div>
  );
};

export default HomePage;
