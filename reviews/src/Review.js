import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  var [index, setIndex] = useState(0);
  var {name, job, image, text} = people[index]

var checkNumber = (number) => {
   if(number > people.length - 1){
     return 0
   }
  if(number < 0){
    return people.length - 1
  }
  return number
}

var nextPerson = () => {
   setIndex((index) => {
      var newIndex = index + 1
      return checkNumber(newIndex)
   })
}


var prevPerson = () => {
  setIndex((index) => {
       var newIndex = index - 1
       return checkNumber(newIndex)
  })
}

var randPerson = () => {
   var randNumber = Math.floor(Math.random() * people.length)
   if(randNumber === index){
      randNumber = index + 1
   }
   setIndex(checkNumber(randNumber))
}

  return (<article className="review">
     <div className="img-container">
      <img src={image} alt={name} className="person-img"/>
      <span className="quote-icon">
        <FaQuoteRight />
      </span>
     </div>
     <h4 className="author">{name}</h4>
     <p className="job">{job}</p>
     <p className="info">{text}</p>
      <div className="button-container">
       <button className="prev-btn" onClick={prevPerson}>
         <FaChevronLeft />
       </button>
       <button className="next-btn"  onClick={nextPerson}>
       <FaChevronRight />
       </button>
      </div>
      <button className="random-btn" onClick={randPerson}>
       suprise me
       </button>
  </article>
  )
};

export default Review;
