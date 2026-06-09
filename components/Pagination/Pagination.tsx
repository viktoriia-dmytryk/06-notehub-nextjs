import css from './Pagination.module.css';
import ReactPaginate from 'react-paginate';
interface PaginationProps {
  page: number;
  setPage: (e: number) => void;
  totalPages: number;
}

function Pagination({ page, setPage, totalPages }: PaginationProps) {
  const handlePageClick = (e: { selected: number }) => {
    setPage(e.selected + 1);
  };
  return (
    <ReactPaginate
      pageCount={totalPages}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      onPageChange={handlePageClick}
      forcePage={page - 1}
      containerClassName={css.pagination}
      activeClassName={css.active}
      nextLabel="→"
      previousLabel="←"
    />
  );
}

export default Pagination;
