import {useDispatch} from 'react-redux';
import {deleteUsers, activateUsers} from '../../store/slices/userSlice';

const UserCard = ({data}) => {

    const dispatch = useDispatch();

    function handleDelete(event) {
        event.preventDefault();
        dispatch(deleteUsers(data.id))
    }
    
    function handleActivate(event) {
        event.preventDefault();
        
        dispatch(activateUsers(data))
    }
    return (
        <div className="flex justify-center">
            <div className="border rounded-md m-1 w-full flex justify-between">
                <div className="   m-2">
                    <h1 className="text-2xl">Name: {data.firstName} {data.lastName}</h1>
                    <h1>Email: {data.email}</h1>
                    <h1>State: {data.state}</h1>
                </div>
                <div className="m-2">
                    <div>
                        <button onClick={handleActivate} className="">Activate</button>
                    </div>
                    <div>
                        <button onClick={handleDelete} className="">Delete</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default UserCard;