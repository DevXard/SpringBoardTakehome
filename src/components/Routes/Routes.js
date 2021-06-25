import {Switch, Route} from 'react-router-dom';
import Users from '../Users/Users';
import SignUp from '../SignUp/SignUp';

 
const Routes = () => {

    return(
        <Switch>
        
            <Route exact path='/' >
                <div>HI</div>
            </Route>
            <Route exact path='/signup' >
                <SignUp />
            </Route>
            <Route exact path='/users' >
                <Users />
            </Route>
        </Switch>
    )
}

export default Routes;