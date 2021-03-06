import React, { useState } from 'react';
import data from './data';
function App() {
   var [count, setCount] = useState(0)
   var [text, setText] = useState([])

  var handleSubmit = (e) => {
      e.preventDefault()
   var amount = parseInt(count)
   
   if(count <= 0){
      amount = 1
   }
   
   if(count > 8){
    amount = 8
 }
   setText(data.slice(0, amount))
  }

  
  return (
  <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
       <form className='lorem-form' onSubmit={handleSubmit}>
    <label htmlFor='amount'> 
       paragraphs:
    </label>
    <input type='number' name='amount' id='amount'
    value={count}
    onChange={(e) => setCount(e.target.value)}
    />
    <button type='submit' className='btn'>generate</button>
       </form>
    <article className="lorem-text">
       {text.map((item, index) => {
          return <p key={index}>
            {item}
          </p>
       })}
    </article>
  </section>
    )
}

export default App;
