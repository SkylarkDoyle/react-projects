import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
   var [color, setColor] = useState('')
   var [error, setError] = useState(false)
   var [list, setList] = useState(new Values('#f15025').all(10))

  var handleSubmit = (e) => {
    e.preventDefault()
    try {
      var colors = new Values(color).all(10)
      setList(colors)
    } catch(err) {
      setError(true)
       console.log(error)
    }
  }
  return (
    <div>
  <section className='container'>
     <h3>color generator</h3>
      <form onSubmit={handleSubmit}>
      <input type='text' value={color} onChange={(e) => 
      setColor(e.target.value)} 
      placeholder="#f15025" 
      className={`${error ? 'error' : null}`}
      />
       <button className="btn" type="submit">
         submit
       </button>
      </form>
  </section>
     <section className="colors">
     {list.map((color, index) => {
       var hex = color.hex
       return <SingleColor key={index} {...color} index={index}  hexColor={hex}/>
     })}
     </section>
  </div>

  )
}

export default App
