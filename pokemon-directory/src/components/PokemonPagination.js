import React from 'react';
import ReactPaginate from 'react-paginate';

const PokemonPagination = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      previousLabel="Previous"
      nextLabel="Next"
      breakLabel="..."
      breakClassName="break"
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={onPageChange}
      containerClassName="pagination"
      activeClassName="active"
    />
  );
};

export default PokemonPagination;
