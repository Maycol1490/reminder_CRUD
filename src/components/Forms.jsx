import React from 'react'
import { BsXLg } from "react-icons/bs";
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'




const defaultValue = {
    first_name: "",
    last_name: "",
    birthday: "",
    email: "",
    password: ""
}


const Forms = ({ CreateNewUser, updateUser, updateUserByID, setUpdateUser, handleFormC }) => {


    useEffect(() => {
        if (updateUser) {
            reset(updateUser)
        }
    }, [updateUser])


    const { handleSubmit, reset, register } = useForm()

    const submit = data => {
        if (updateUser) {
            updateUserByID(data)
            setUpdateUser()
        } else {
            CreateNewUser(data)
        }
        reset(defaultValue)
        handleFormC()
    }

    return (
        <div className='form-inf'>
            <form onSubmit={handleSubmit(submit)}>
                <div onClick={handleFormC} className='close'><i><BsXLg /></i></div>
                <h3 className='form-title'>{updateUser ?
                    'Update Information'
                    :
                    'Create User'
                }
                </h3>
                <div className='form-input' >
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' {...register('first_name')} />
                </div>
                <div className='form-input' >
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id='lastName' {...register('last_name')} />
                </div>
                <div className='form-input' >
                    <label htmlFor="birthday">Birthday</label>
                    <input type="date" id='birthday' {...register('birthday')} />
                </div>
                <div className='form-input' >
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' {...register('email')} />
                </div>
                <div className='form-input' >
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' {...register('password')} />
                </div>
                <button>{updateUser ? 'update user' : 'Create User'}</button>
            </form>
        </div>
    )
}

export default Forms