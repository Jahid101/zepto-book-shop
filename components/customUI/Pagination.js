import React, { useRef } from 'react';
import ReactPaginate from 'react-paginate';

function Pagination(props) {
    let { limit, total, selectedPage, setPage } = props;

    const pagination = useRef();

    return (
        <>
            <ReactPaginate
                ref={pagination}
                previousLabel={<>&laquo;</>}
                breakLabel="..."
                nextLabel={<>&raquo;</>}
                pageCount={Math.ceil(total / limit)}
                pageRangeDisplayed={1}
                marginPagesDisplayed={1}
                onPageChange={(data) => setPage(data)}
                forcePage={selectedPage}

                containerClassName="web-pagination"
                activeClassName="web-pagination-active"
                pageLinkClassName="web-pagination-page-link"
                breakLinkClassName="web-pagination-page-link"
                nextLinkClassName="web-pagination-page-link"
                previousLinkClassName="web-pagination-page-link"
                pageClassName="web-pagination-page-item"
                breakClassName="web-pagination-page-item"
                nextClassName="web-pagination-page-item"
                previousClassName="web-pagination-page-item"
                disabledClassName="web-pagination-disabledClassName"
            />
        </>
    )
}

export default Pagination; 