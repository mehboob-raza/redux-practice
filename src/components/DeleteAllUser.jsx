import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import {removeAllUsers} from '../store/actions/index'
import { useDispatch } from 'react-redux'


const DeleteAllUser = () => {

  const dispatch = useDispatch()
  
  function DeleteAllUser(){
    dispatch(removeAllUsers())

  }


  return (
    <div style={{
      display:'flex',
      justifyContent:'flex-end',

    }}>
      <button onClick={() => DeleteAllUser()} style={{
        backgroundColor: 'red',
        display:'flex',
        padding: '20px',
        justifyContent: 'space-between',
        width: '160px'

      }}>
        Clear All
        <AiFillDelete style={{
                        fontSize:'20px',
                        color:'white',
                        cursor:'pointer'
                    }}/>
      </button>
    </div>
  )
}

export default DeleteAllUser