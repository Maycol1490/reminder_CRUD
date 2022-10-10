import React from 'react'
import { BsXLg } from "react-icons/bs"

const Modal = ({text1,text2,setModalDelete,setModalEdit}) => {


    const handleClose = ()=>{
        if(setModalDelete){
            setModalDelete(false)
        }
        if(setModalEdit){
            setModalEdit(false)
        }
    }

  return (
    <div className='container-modal'>
        <i className='close' onClick={handleClose}><BsXLg/></i>
        <h2 className='modal-title'>{text1}</h2>
        <p className='nodal-body'>{text2}</p>
        <button onClick={handleClose}>Accept</button>
    </div>
  )
}

export default Modal
