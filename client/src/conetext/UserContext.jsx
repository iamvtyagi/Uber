import React, { useState } from 'react'

export const UserDataContext = React.createContext()

const UserContext = ({children}) => {

const [user, setuser] = useState({
    email: '',
    fullName :{
        firstName: '',
        lastName: ''
    }
})

  return (
    <div>
     <UserDataContext.Provider value={[user, setuser]}>
        {children}
        </UserDataContext.Provider>
    </div>
  )
}

export default UserContext
