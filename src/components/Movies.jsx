import React,{useState} from 'react'
import {getMovies} from '../services/fakeMovieService'
import { getGenres } from '../services/fakeGenreService'
import Pagination from './common/pagination'
import Paginate from '../utils/paginate'
import ListGroup from './common/listGroup'
import MoviesTable from './moviesTable'

function Movies() {

    const [allMovies, setAllMovies] = useState(getMovies())
    const [genres, setGenres] = useState([{_id:'',name:'All Genres'},...getGenres()])
    const [pageSize, setPageSize] = useState(3)
    const [currentPage, setCurrentPage] = useState(1)
    const [selectedGenre, setSelectedGenre] = useState('')

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

    //genre
    const handleGenreSelect=(genre)=>{
        setSelectedGenre(genre)
        setCurrentPage(1)
    }

    //sort
    const handleSort=(path)=>{
        console.log(path)
    }

    const {length:count}=allMovies

    const filtered=selectedGenre &&selectedGenre._id ? allMovies.filter(movie=> movie.genre._id ===selectedGenre._id):allMovies;
    const movies=Paginate(filtered,currentPage,pageSize)


    return (
        <div className='row'>

            <div className="col-3">
                <ListGroup items={genres} onItemSelect={handleGenreSelect}
                selectedItem={selectedGenre}
                />
            </div>

            <div className="col">

                {count===0?(
                <p>No Movie in our data base</p>
                            ):(<>
                <p>Showing {filtered.length} movies in data base.</p>

                <MoviesTable
                    movies={movies} 
                    onLike={handleLike }
                    onDelete={handleDelete}
                    onSort={handleSort}
                />
                
                <Pagination 
                    itemsCount={filtered.length}
                    pageSize={pageSize} 
                    onPageChange={handlePageChange}
                    currentPage={currentPage}
                />

           </>
           )}  
            </div>

        </div>
    )
}

export default Movies
