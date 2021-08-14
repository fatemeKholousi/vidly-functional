import React,{useState} from 'react'

function Like({liked,onLike}) {
    // const [liked, setLiked] = useState(false)
    let classes="fa fa-heart";
    if(!liked) classes+="-o"
    return <i className={classes} aria-hidden="true"
    onClick={onLike}
    />
    return (
        <div>
                 <i class="fa fa-heart" ></i>
                    <i class="fa fa-heart-o" aria-hidden="true"></i> 
        </div>
    )
}

export default Like
