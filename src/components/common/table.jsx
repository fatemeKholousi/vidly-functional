import React from 'react'
import TableHeader from './tableHeader'
import TableBody from './tableBody'

function Table({columns,movies,sortColumn,onSort}) {
    return (
        <>
            <table className="table">
              <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
              <TableBody data={movies} columns={columns}/>
            </table>
        </>
    )
}

export default Table
