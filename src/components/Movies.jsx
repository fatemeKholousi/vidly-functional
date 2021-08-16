import React,{useState} from 'react'
import {getMovies} from '../services/fakeMovieService'
import Like from './common/like'
import Pagination from './common/pagination'
import Paginate from '../utils/paginate'

function Movies() {

    const [allMovies, setAllMovies] = useState(getMovies())
    const [pageSize, setPageSize] = useState(3)
    const [currentPage, setCurrentPage] = useState(1)

    //delete
    const handleDelete=(id)=>{ 
        const moviesCopy=[...allMovies]
        const newMovieList=moviesCopy.filter(item => item._id!==id)
        setAllMovies(newMovieList) 
            }

    //deep copy + change
    const handleLike=(movie)=>{
        const movies2=[...allMovies]
        const index=movies2.indexOf(movie)
        movies2[index]={...movies2[index]}
        //toggle
        movies2[index].liked=!movies2[index].liked
        //important part
        setAllMovies(movies2)
    }

    //active pagination buttons
    const handlePageChange=(page)=>{
        setCurrentPage(page)
    }

    const {length:count}=allMovies
    const movies=Paginate(allMovies,currentPage,pageSize)


    return (
        <>
            {count===0?(
            <p>No Movie in our data base</p>
                        ):(<>
            <p>Showing {count} movies in data base.</p>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        <th/>
                        <th/>
                    </tr>
                </thead>
            <tbody>
            {movies.map(movie=>(
                <tr key={movie._id}>
                <td>{movie.title}</td> 
                <td>{movie.genre.name}</td> 
                <td>{movie.numberInStock}</td> 
                <td>{movie.dailyRentalRate}</td> 
                <td>
                <Like liked={movie.liked} onLike={()=>handleLike(movie)}/>
                </td>

                <td>
                    <button type="button" className="btn btn-danger"
                    onClick={()=>handleDelete(movie._id)}>
                    Delete                    
                    </button>
                </td> 
                </tr>

            ))      
            }

            </tbody>
            </table>
            <Pagination 
                itemsCount={count}
                pageSize={pageSize} 
                onPageChange={handlePageChange}
                currentPage={currentPage}
            />

           </>
           )}
        </>
    )
}

export default Movies
