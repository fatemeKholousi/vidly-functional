import React from 'react'

function SearchBox({value,onChange}) {
    return (
        <>


            <input type="text"
            name="searchInpt"
            className="form-control my-3"
            placeholder="search..."
            value={value}
            onChange={(e)=>onChange(e.currentTarget.value) }
            />



        </>
    )
}

export default SearchBox
