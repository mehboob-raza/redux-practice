import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {AiFillDelete} from 'react-icons/ai'
import {removeUser} from '../store/slice/UserSlice'


const DisplayUsers = () => {
    const data = useSelector((state) =>{
        return state.users
    })
    console.log(data);

    const dispatch = useDispatch()

    function deleteUser(idx){
        dispatch(removeUser(idx))
    }
  return (
    <div>
        {
        data.map((user, idx) =>{
            return <li key={idx} style={{
                display:'flex',
                justifyContent:'space-between',
                marginTop: '20px'
            }}>
                {user}
                <button className='btn btn-delete' onClick={() => deleteUser(idx)} style={{
                        backgroundColor: 'brown',
                        border:'none'
                }}>
                    <AiFillDelete style={{
                        fontSize:'20px',
                        color:'white',
                        cursor:'pointer'
                    }}/>
                </button>
            </li>
        })
        }
    </div>
  )
}

export default DisplayUsers