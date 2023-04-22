import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = (props) => {
  const MaxPageNumber = Math.ceil(props.totalCount / props.pageSize);
  // console.log(pages)
  let pagesArray = [];
  for (let i = 1; i <= MaxPageNumber; i++) {
    pagesArray.push(i);
  }

  //let pagesArray = _.range(1,MaxPageNumber+1);
  //console.log(pagesArray)
  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a
            className="page-link"
            onClick={() => props.ChangePageHandler("Pervious")}
            style={{ cursor: "pointer" }}
          >
            قبلی
          </a>
        </li>
        {pagesArray.map((page) => (
          <li
            className={
              props.currentPage === page ? "page-item active" : "page-item"
            }
            key={page}
          >
            <a
              className="page-link"
              onClick={() => props.ChangePageHandler(page)}
              style={{ cursor: "pointer" }}
            >
              {page}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a
            className="page-link"
            onClick={() => props.ChangePageHandler("Next",MaxPageNumber)}
            style={{ cursor: "pointer" }}
          >
            بعدی
          </a>
        </li>
      </ul>
    </nav>
  );
};
Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  ChangePageHandler: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired,
};
export default Pagination;
