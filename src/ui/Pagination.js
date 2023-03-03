import React from 'react';
//component for pagination at the bottom of the app
const Pagination = ({currentPage, setPage}) => {//passed currentPage variable and setPage function
    
    return (
        <div className="pagination__container">
            {/* When currentPage is not first page show Previous button. Otherwise do not. onClick call setPage function with argument of currentPage-1 to decrease currentPage count */}
        {(currentPage !== 1) &&
            <button className="pagination__btn previous__btn" onClick={() => setPage(currentPage-1)}>Previous</button>
        }
            <h3>Page: {currentPage}</h3>
            {/* onClick call setPage function with argument currentPage+1 to increase currentPage count */}
            <button className="pagination__btn" onClick={() => setPage(currentPage+1)}>Next</button>
        </div>
    );
}

export default Pagination;
