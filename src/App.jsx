import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react'
import Forms from './components/Forms'
import UsersCard from './components/UsersCard'
import Colors from './components/Colors'
import Modal from './components/Modal'

const baseURL = 'https://users-crud1.herokuapp.com'


function App() {
  const [users, setUsers] = useState()
  const [userCard, setUserCard] = useState()
  const [updateUser, setUpdateUser] = useState()
  const [modalForm, setModalForm] = useState(false)
  const [modalEdit, setModalEdit] = useState(false)
  const [modalDelete, setModalDelete] = useState(false)



  const getAllUsers = () => {
    const URL = `${baseURL}/users/`
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])


  const CreateNewUser = (data) => {
    const URL = `${baseURL}/users/`
    axios.post(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const deleteUserByID = (id) => {
    const URL = `${baseURL}/users/${id}/`
    axios.delete(URL)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        setModalDelete(true)
      })
      .catch(err => console.log(err))
  }

  const updateUserByID = (data) => {
    const URL = `${baseURL}/users/${data.id}/`
    axios.patch(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        setModalEdit(true)
      })
      .catch(err => console.log(err))
  }

  const handleFormO = () => {
    setModalForm(true)
  }

  const handleFormC = () => {
    setModalForm(false)
  }
  console.log(updateUser);

  return (
    <div className="App">
      <div className='container-title'>
        <h1 className='title-principal'>Birthday Reminders</h1>
        <button onClick={handleFormO}>Create User</button>
      </div>
      <div className={modalForm ? 'container-form' : 'container-form-none'}>
        <Forms
          CreateNewUser={CreateNewUser}
          updateUser={updateUser}
          updateUserByID={updateUserByID}
          setUpdateUser={setUpdateUser}
          handleFormC={handleFormC}
        />
      </div>
      <Colors
        getAllUsers={getAllUsers}
        users={users}
      />
      <div className='container-cardUsers'>
        {
          users?.map(user => (
            <UsersCard
              key={user.id}
              user={user}
              deleteUserByID={deleteUserByID}
              setUpdateUser={setUpdateUser}
              handleFormO={handleFormO}
              setUserCard={setUserCard}
            />
          ))
        }
      </div>
      <div className={modalDelete ? 'modal-delete' : 'modal-delete-none'}><Modal
        setModalDelete={setModalDelete}
        text1={'Delete user'}
        text2='the user has been successfully updated'
      /> </div>
      <div className={modalEdit ? 'modal-edit' : 'modal-edit-none'}><Modal
        setModalEdit={setModalEdit}
        text1={'Update user'}
        text2='The user has been deleted successfully'
      /> </div>
    </div>
  )
}

export default App
