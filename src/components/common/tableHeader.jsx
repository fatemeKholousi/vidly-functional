import React from 'react'

function TableHeader({columns, onSort, sortColumn}) {
       
    const raiseSort=path=>
    { 
    const sortColumn2={...sortColumn};
    if(sortColumn2.path===path){
        sortColumn2.order=(sortColumn2.order==='asc'? 'desc':'asc')
    }
    else
    { sortColumn2.order='asc';
        sortColumn2.path=path;}
        onSort(sortColumn2)
    }

    const renderSortIcon=(column)=>{
        if(column.path!==sortColumn.path) return null;
        if(sortColumn.order==='asc') return <i className="fa fa-sort-asc"/>
        if(sortColumn.order==='desc') return <i className="fa fa-sort-desc"/>

        

    }
    return (


            <thead>
            <tr>
                {columns.map(column=>
                    (<th key={column.paths} onClick={()=>raiseSort(column.path)} scope="col">
                        {column.label}
                        {renderSortIcon(column)}
                    </th>)
                )}
                    
            </tr>
            </thead>


    )
}

export default TableHeader
