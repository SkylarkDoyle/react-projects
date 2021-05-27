import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
   var [loading, setLoading] = useState(true)
   var [searchTerm, setSearchTerm] = useState('a')
  var [cocktails, setCocktails] = useState([])


var fetchDrinks = useCallback(async () => {
  setLoading(true)
    try {
      var response = await fetch(`${url} ${searchTerm}`)
      var data = await response.json()
      var {drinks} = data
       if(drinks){
           var newCocktails = drinks.map((item) => {
              var { idDrink,
                 strDrink,
                  strDrinkThumb,
                   strAlcoholic, 
                   strGlass } =  item

                   return {
                     id: idDrink, 
                    name:strDrink,
                    image:strDrinkThumb,
                    info: strAlcoholic,
                    glass:strGlass
                  
                  }
           })
             setCocktails(newCocktails)
       }
       else{
          setCocktails([])
       }
         setLoading(false)
    }catch (error) {
       console.log(error)
       setLoading(false)
    }
}, [searchTerm])

useEffect(() => {
   fetchDrinks()
}, [searchTerm, fetchDrinks])

  return <AppContext.Provider value={{
    loading, 
    cocktails, 
    setSearchTerm
  }}>
    {children}
    </AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
