import React from 'react'
import _ from "lodash"
function Pagination({pageSize,itemsCount,currentPage,onPageChange}) {
    const pagesCount=Math.ceil(itemsCount/pageSize);
    if (pagesCount===1) return null
    const pages=_.range(1,pagesCount+1 )
    console.log(currentPage)
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

export default Pagination
