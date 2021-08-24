import React from 'react'
import { useHistory } from 'react-router-dom'
// import { useParams } from 'react-router-dom'

function MovieDetail({match}) {
    const history=useHistory()
    return (
        <div>
            {/* {params}saasas */}
            <h1>id of this movie is: {match.params.id}</h1>
            <button className='btn btn-primary' onClick={()=>{history.push('/movies') }}>
                Save
            </button>
        </div>
    )
}

export default MovieDetail
