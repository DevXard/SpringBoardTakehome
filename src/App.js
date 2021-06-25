import {BrowserRouter} from 'react-router-dom';
import Routes from './components/Routes/Routes';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
