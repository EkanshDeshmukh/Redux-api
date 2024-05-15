import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userdelete } from './store/reducers/userReducer'


const App = () => {
    const Dispatch = useDispatch()
    const { users } = useSelector((state) => state.userReducer)
    const DeleteHandler = (i) => {
        Dispatch(userdelete(i))
    }
    return (
        <div className='m-auto container p-10 mt-5 bg-red-100'>
            <h1 className='text-red-900 text-4xl font-bold text-center'>  User List</h1>
            <ul>
                {users.map((u,i) => (
                    <li key={u.id}>
                        <h1>
                            {u.name} <span onClick={() => DeleteHandler(i)} className='text-red-600 font-bold text-xl cursor-pointer'> x</span></h1></li>
                ))}
            </ul>
        </div>

    )
}

export default App