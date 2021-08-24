import React from 'react'
import { Link } from 'react-router-dom'
import Like from './common/like'
import Table from './common/table'

function MoviesTable({movies,onLike,onDelete,onSort,sortColumn}) {

    const columns=[
        {path:'title', label:'Title',content:movie=> (<Link to={`/movies/${movie._id}`}>{movie.title}</Link>)},
        {path:'genre.name', label:'Genre'},
        {path:'numberInStock', label:'Stock'},
        {path:'dailyRentalRate', label:'Rate'},
        // for like and delete column header
        {  key:'like',
            content:item=><Like liked={item.liked} onLike={()=>onLike(item)}/>
        },
        {
            key:'delete',
            content:item=> 
            <button type="button" className="btn btn-danger"
            onClick={()=>onDelete(item._id)}>
            Delete                    
            </button>
        }   
    ]

    return (
        <>
              <Table columns={columns} movies={movies} sortColumn={sortColumn} onSort={onSort}/>
        </>
    )
}

export default MoviesTable
