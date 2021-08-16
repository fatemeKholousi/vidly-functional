import React from 'react'

function ListGroup({items,onItemSelect ,valueProperty,textProperty,selectedItem}) {
    return (
        <div>
        <ul className="list-group">
            {items.map(genre=>
            
            <li key={genre[valueProperty]} 
            className={selectedItem[valueProperty]===genre[valueProperty]?"list-group-item active" :"list-group-item" }
            onClick={()=>onItemSelect(genre)}>
                {genre[textProperty]}
        </li>
        )} 
        </ul>
        </div>
    )
}
ListGroup.defaultProps={
    valueProperty:'_id' ,  textProperty:"name"

}

export default ListGroup
