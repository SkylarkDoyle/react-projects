import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'


const Submenu = () => {
  const {
    isSubmenuOpen,
    page: { page, links },
    location,
  } = useGlobalContext()
   var container = useRef(null)
   var [columns, setColumns] = useState('col-2')
   useEffect(() => {
      setColumns('col-2')
      var submenu = container.current
      var {center, bottom} = location
      submenu.style.left = `${center}px`
      submenu.style.top = `${bottom}px`

      if(links.length === 3){
         setColumns('col-3')
      }

      if(links.length  > 3){
        setColumns('col-4')
      }
      
    }, [location, links])

  return (
    <aside
    className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
    ref={container}
  >
    <section>
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { url, icon, label } = link
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </section>
  </aside>
  )
}

export default Submenu
