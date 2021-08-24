import React from 'react'
import _ from 'lodash'

function TableBody({data,columns}) {
    const renderCell=(item,column)=>{
        if(column.content){
         return(column.content(item))
        }
        
        else{
        return(_.get(item,column.path))
        }

    }
    
   
    return (
            <tbody>
               
            {data.map(item=>( <tr>
                {columns.map(column=>
                    (
                        <td>
                            {renderCell(item,column)}
                        </td>
                    )
                    )}
                <tr key={item._id}>

                </tr>

           </tr>     
            ) )  
            }
      
            </tbody>
    )
}

export default TableBody
