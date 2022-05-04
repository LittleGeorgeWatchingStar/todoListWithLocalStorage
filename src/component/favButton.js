import React from 'react';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarIcon from '@material-ui/icons/Star';
import IconButton from '@material-ui/core/IconButton';

const FavButton = ({ checked,onClick }) => {
    if(checked){
        return(
            <IconButton edge="end" aria-label="comments" onClick={onClick} >
              <StarIcon style={{ color:"gold" }} />
            </IconButton>
        )
    }else{
        return(
            <IconButton edge="end" aria-label="comments" onClick={onClick}>
                <StarOutlineIcon style={{ color:"gold" }} />
            </IconButton>
        )
    }
}

export default FavButton