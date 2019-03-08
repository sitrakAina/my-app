import React, { useState } from 'react'
import UserTable from './Components/UserTable'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import AddUserForm from './Components/AddUserForm'

const App = () => {
  const usersData = [
    
  ]

  const [users, setUsers] = useState(usersData)
  
  const addUser = user => {
		user.id = users.length +1
		setUsers([ ...users, user ])
  }
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <div className="container body">
      
      <div className="flex-row">
        <div className="flex-large">
          
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          
          <UserTable users={users} deleteUser={deleteUser}/>
        </div>
      </div>
    </div>
  )
}




export default App
