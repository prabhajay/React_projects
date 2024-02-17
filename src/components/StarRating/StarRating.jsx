import React from 'react';
import { useState } from "react";

import { FaStar } from "react-icons/fa";

import './styles.css';

export const StarRating = ({noOfStars=5}) => {
const [rating,setRating]=useState(0);
const [hover,setHover]=useState(0);

  function handleClick(getCurrentIndex)
  {
    setRating(getCurrentIndex);
  }

  function handleMove(getCurrentIndex)
  {
    setHover(getCurrentIndex);
  }

  function handleLeave()
  {
    setHover(rating);
  }

  return (
    <div className='star-rating'>
        {[...Array(noOfStars)].map((_,index)=>{
          index+=1;
          return(
            <FaStar 
            key={index}
            className={index<=(hover || rating) ? 'active' :'inactive'}
            onClick={()=>handleClick(index)}
            onMouseMove={()=>handleMove(index)}
            onMouseLeave={()=>handleLeave()}
            size={40}
            />
          )
        })}
    </div>
  )
}
