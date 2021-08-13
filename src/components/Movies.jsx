import React,{useState} from 'react'
import {getMovies} from '../services/fakeMovieService'

function Movies() {

    const [movies, setMovies] = useState(getMovies())

    const handleDelete=(id)=>{ 
        const moviesCopy=[...movies]
        const newMovieList=moviesCopy.filter(item => item._id!==id)
        setMovies(newMovieList) 
            }

    const {length:counter}=movies
    return (
        <>
            {counter===0?(
            <p>No Movie in our data base</p>
                        ):(<>
            <p>Showing {counter} movies in data base.</p>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        <th scope="col"></th>
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
           </>
           )}
        </>
    )
}

export default Movies
