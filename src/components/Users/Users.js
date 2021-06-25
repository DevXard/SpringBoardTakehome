import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getUsers} from '../../store/slices/userSlice';

import UserCard from './UserCard';
import Search from '../Search/Search';
import {registerUsers} from '../../store/slices/userSlice';

const Users = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })
    const dispatch = useDispatch();
    const user = useSelector((state) => state.users.users)
    const [state, setState] = useState(user)
    

    useEffect(() => {
        dispatch(getUsers())
    },[dispatch])   

    
    

    function handleChange(event){
        const {name, value} = event.target;

        setFormData(data => ({...data, [name]: value}))
    }

    function handleSubmit(event){
        event.preventDefault();
        dispatch(registerUsers(formData))
    }
    
    function searchUsers(name){
        
        setState(user.filter(user => `${user.firstName}${user.lastName}`.toLocaleLowerCase().includes(name.toLocaleLowerCase())))
    }

    
    if(user.length < 1){
        return <div>Loading...</div>
    }

    return(
        <div>
        
        <div className="flex mt-5 flex-col">
        <div className="container max-w-sm flex justify-start  px-2">
            <form onSubmit={handleSubmit}>
                <input  
                placeholder="firstName"
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                className='block border rounded-md border-grey-light px-1 outline-none w-full'/>
                <input 
                placeholder="lastName"
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                className='block border rounded-md border-grey-light px-1 outline-none w-full'/>
                <input 
                placeholder="email"
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='block border rounded-md border-grey-light px-1 outline-none w-full'/>
                <div className="flex justify-center my-2">
                    <button className='border rounded-md px-2 hover:bg-green-200'>Create User</button>
                </div>
                
            </form>
        </div>
        </div>
        <div className="flex justify-center">
        
            <div className="w-4/6 h-96 overflow-auto shadow-lg p-1">
            <Search search={searchUsers} />
                {state.map(user => <UserCard key={user.id} data={user}/>)}
            </div>
        </div>
        </div>
    )
}

export default Users;