import React from 'react'
import { BsFillTrashFill, BsPencilSquare } from "react-icons/bs";

const UsersCard = ({user,deleteUserByID,setUpdateUser,handleFormO}) => {


    const handleUpdateUser = ()=>{
        setUpdateUser(user)
        handleFormO()
    }

  return (
    <article className={`months${user.birthday[5]+user.birthday[6]} inf-usersCard`}>
        <h2 className='users-name'>{`${user.first_name} ${user.last_name}`}</h2>
        <ul className='users-ul'>
            <li className='users-li' ><span>Email</span>{user.email}</li>
            <li className='users-li' ><span>Birthday</span>{user.birthday}</li>
        </ul>
        <footer className='users-footer'>
            <i onClick={handleUpdateUser} ><BsPencilSquare/></i>
            <i onClick={()=>deleteUserByID(user.id)} ><BsFillTrashFill/></i>
        </footer>
    </article>
  )
}

export default UsersCard


//BsPencilSquare