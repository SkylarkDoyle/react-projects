import React, { useState, useContext } from 'react'


var AppContext = React.createContext()

var AppProvider = ({ children }) =>  {
   var [isSideBarOpen, setIsSidebarOpen] = useState(false)
   var [isModalOpen, setIsModalOpen] = useState(false)

var openSidebar = () => {
    setIsSidebarOpen(true)
}

var closeSidebar = () => {
    setIsSidebarOpen(false)
}

var openModal = () => {
    setIsModalOpen(true)
}

var closeModal = () => {
    setIsModalOpen(false)
}




    return <AppContext.Provider value={{
        isModalOpen,
       isSideBarOpen, 
      openModal, 
       openSidebar,
        closeModal,
         closeSidebar
    }}>
         {children}
    </AppContext.Provider>

}

//custom hook
export var useGlobalContext = () => {
      return useContext(AppContext)
}

export {AppContext, AppProvider}