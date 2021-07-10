import {Link} from 'react-router-dom';

const LandingPage = () => {

    return (
        <div className="flex h-96 ">
            <div className="m-auto">
                <Link className="w-40 bg-blue-300 m-2 rounded p-2 border" to="/signup">Sign Up</Link>
                <Link className="bg-blue-300 m-2 rounded p-2 w-40" to="/users">Users</Link>
            </div>
        </div>
    )
}

export default LandingPage;