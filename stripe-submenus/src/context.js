import React, { useState, useContext } from 'react';
import sublinks from './data';
var AppContext = React.createContext();

var AppProvider = ({ children }) => {
  var [isSidebarOpen, setIsSidebarOpen] = useState(false);
  var [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  var [location, setLocation] = useState({})
  var [page, setPage] = useState({page: '', links:[]})


  var openSidebar = () => {
    setIsSidebarOpen(true);
  }

  var closeSidebar = () => {
    setIsSidebarOpen(false);
  }

  var openSubmenu = (text, coordinates) => {
      var page = sublinks.find((link) => link.page === text)
      setPage(page)
      setLocation(coordinates)
      setIsSubmenuOpen(true);
  }

  var closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        location,
        page
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export var useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
