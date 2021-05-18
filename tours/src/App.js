import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
var [loading, setLoading] = useState(true)
var [tours, setTours] = useState([])

var removeTour = (id) => {
  var newTours = tours.filter((tour) => tour.id !== id);
  setTours(newTours)
}

var fetchTours = async() => {
   setLoading(true)
   try {
      var response = await fetch(url)
      var tours = await response.json()
      setLoading(false)
      setTours(tours)
   } catch (error) {
       setLoading(false)
       console.log(error)
   }
}

useEffect(() => {
  fetchTours()
}, [])

if(loading){
   return(
     <Loading />
   )
}
if(tours.length === 0){
  return <main className="title">
    <h2>no tour left</h2>
    <button className="btn" onClick={fetchTours}>
      Refresh
    </button>
  </main>
}
  return (<main>
    <Tours tours={tours} removeTour={removeTour}/>
  </main>
  )
}

export default App
