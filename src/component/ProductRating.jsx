import React from 'react'
import { Star, StarFill, StarHalf } from 'react-bootstrap-icons';

export default function ProductRating(props) {

    const {rating} = props

    
  return (
    <div className='d-flex justify-content-center mt-2'>
        {rating > 1 
            ? ((rating > 1 && rating < 2) ? <StarHalf style={{color:'warning'}}></StarHalf> : <StarFill></StarFill>)
            : <Star></Star> 
        } 
        
        {rating > 2 
            ? ((rating > 2 && rating < 3) ? <StarHalf></StarHalf> : <StarFill></StarFill>)
            : <Star></Star> 
        }        
        {rating > 3 
            ? ((rating > 3 && rating < 4) ? <StarHalf></StarHalf> : <StarFill></StarFill>)
            : <Star></Star> }        
        {rating > 4 
            ? ((rating > 4 && rating < 4.5) ? <StarHalf></StarHalf> : <StarFill></StarFill>)
            : <Star></Star> }        
        {rating > 5 
            ? ((rating => 4.5 && rating <= 4) ? <StarHalf></StarHalf> : <StarFill></StarFill>)
            : <Star></Star> }        
    </div>
  )
}
