import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import ForgotPassword from './components/ForgotPassword/password';
import Home from './components/MailBox/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Signup/>
          </Route>
          <Route exact path='/login'>
            <Login/>
          </Route>
          <Route exact path='/password'>
            <ForgotPassword/>
          </Route>
          <Route exact path='/Home'>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
