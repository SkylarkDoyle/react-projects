import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

var getLocalStorage = () => {
   var list = localStorage.getItem('list')
   if(list) {
      return JSON.parse(localStorage.getItem("list"))
   }
   else{
      return []
   }
}

function App() {
    var [name, setName] = useState('')
    var [list, setList] = useState(getLocalStorage())
    var [isEditing, setIsEditing] = useState(false)
    var [editID, setEditID] = useState(null)
    var [alert, setAlert] = useState({show:false,
       msg:'', type: ''})

var showAlert = (show=false, type="", msg="") => {
   setAlert({show, type, msg})
}

var handleSubmit = (event) => {
    event.preventDefault()
    if(!name){
      showAlert(true, 'danger', 'please enter value')
    }
    else if(name && isEditing){
        setList(list.map((item) => {
          if(item.id === editID) {
             return {...item, title: name}
          }
           return item
        }))
        setName('')
        setEditID(null)
        setIsEditing(false)
        showAlert(true, 'success', 'item changed')
    }
    else{
      showAlert(true, "success", "item added to the list")
       var newItem = {id: new Date().getTime().toString(), 
        title: name}
      setList([...list, newItem])
      setName('')
    }
}
  
var clearList = () => {
  showAlert(true, "danger", "empty list")
  setList([])
}

var removeItem = (id) => {
    showAlert(true,'danger', 'item removed')
    setList(list.filter((item) => item.id !== id))
}

var editItem = (id) => {
    var specificItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditID(id)
    setName(specificItem.title)
}
useEffect(() => {
 localStorage.setItem('list', JSON.stringify(list))
}, [list])



return <section className='section-center'>
     <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
      <h3>grocery bud</h3>
        <div className='form-control'>
      <input type="text" className='grocery' 
             placeholder="e.g. eggs" 
             value={name} 
             onChange={(e) => setName(e.target.value)}
             />
            <button type="submit" className="submit-btn">
              {isEditing ? 'edit' : "submit"}
            </button>
        </div>
     </form>
     {list.length > 0 &&  (
   <div className="grocery-container">
  <List items={list} removeItem={removeItem} editItem={editItem}/>
   <button className='clear-btn' onClick={clearList} >
     clear items
   </button>
</div>
     )}
     
      </section>
}

export default App
