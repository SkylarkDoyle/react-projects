import React, { useState, useEffect } from 'react'

const SingleColor = ({rgb, weight, index, hexColor}) => {
  var [alert, setAlert] = useState(false)
  var bcg = rgb.join(',')
  var hexValue =  `#${hexColor}`
  useEffect(() => {
    var timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [alert])

  return <article className={`color ${index > 10 && 'color-light'}`} 
  style={{backgroundColor:`rgb(${bcg})`}}
   onClick={() => {
     setAlert(true)
    navigator.clipboard.writeText(hexValue)
  }}
  >
   <p className="percent-value">
      {weight}%
   </p>
   <p className="color-value">{hexValue}</p>
   {alert && <p className="alert">
     copied to clipboard</p>}
    </article>
}

export default SingleColor
