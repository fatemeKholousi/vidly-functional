import React from 'react'
import _ from "lodash"
import PropTypes from 'prop-types';

function Pagination({pageSize,itemsCount,currentPage,onPageChange}) {
    const pagesCount=Math.ceil(itemsCount/pageSize);
    if (pagesCount===1) return null
    const pages=_.range(1,pagesCount+1 )
    
    return (
        <div>
        <nav >
            <ul className="pagination pagination-sm">
                {pages.map(page=>(
                   <li key={page} className={page===currentPage?"page-item active":"page-item" }>
                     <a className="page-link"
                     onClick={()=>{onPageChange(page)}}
                     >
                         {page}</a>
                    </li>  
                ))}
               
             </ul>
        </nav>
        </div>
    )
}

Pagination.propTypes={
    pageSize:PropTypes.number.isRequired,
    itemsCount:PropTypes.number.isRequired,
    currentPage:PropTypes.number.isRequired,
    onPageChange:PropTypes.func.isRequired,
}



export default Pagination
