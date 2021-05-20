import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  var [loading, setLoading] = useState(true)
  var [jobs, setJobs] = useState([])
   var [value, setValue] = useState(0)

  var fetchJobs = async () => {
     var response = await fetch(url)
     var newJobs = await response.json()
     setJobs(newJobs)
     setLoading(false)
  }

  useEffect(() => {
     fetchJobs();
  }, [])

if(loading){
  return <section className='section loading'>
    <h1>loading...</h1>
  </section>
}

  var {company, duties, dates, title} = jobs[value]

  return (
  <section className='section'>
     <div className='title'>
    <h2>experience</h2>
    <div className='underline'></div>
    <div className="jobs-center">
      {/* btn container */}
      <div className="btn-container"> 
        {
          jobs.map((item, index) => {
            return <button key={item.id} onClick={() => {
              setValue(index)
            }}
            className={`job-btn ${index === value && 'active-btn'}`}
            >
              {item.company}
            </button>
          })
        }
      </div>
  
       {/* job info */}
      <article className='job-info'>
         <h3>{title}</h3>
         <h4>{company}</h4>
         <p className="job-date">{dates}</p>
         {duties.map((duty, index) => {
           return <div key={index} className='job-desc'>
             <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>
           </div>
         })}
      </article>
      
    </div>
     </div>
    </section>
  )
}

export default App
