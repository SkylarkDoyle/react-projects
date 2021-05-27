import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
   var { setSearchTerm } = useGlobalContext()
   var searchValue = React.useRef('')

   var searchCocktail = () => {
      setSearchTerm(searchValue.current.value)
   }

   React.useEffect(() => {
       searchValue.current.focus()
       

   }, [])

   var handleSubmit = (e) => {
       e.preventDefault()
   }

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor='name'>search your favorite cocktail</label>
          <input type="text" 
          id="name" 
          ref={searchValue} 
          onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
