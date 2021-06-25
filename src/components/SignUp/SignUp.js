import {useState} from 'react'
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

import {registerUsers} from '../../store/slices/userSlice';

const Login = () => {

    const history = useHistory()
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setFormData(data => ({...data, [name]: value}))
    }

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(registerUsers(formData))
        history.push('/')
    }

    return (
        <div>
        <div className="bg-grey-lighter min-h-screen flex mt-5 flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input 
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name" />
                <label>Last name</label>
                <input 
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name" />
                <label>Email</label>
                <input 
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email" />
                <button
                    type="submit"
                    className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
                >Register</button>
                </form>
                
            </div>
        </div>
    </div>
        </div>
    )
}

export default Login;