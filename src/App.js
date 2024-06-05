import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import ForgotPassword from './components/ForgotPassword/password';
import Home from './components/MailBox/Home/Home';
import SentEmail from './components/MailBox/sidebar/SentEmail';
import Menu from './components/MailBox/sidebar/Menu';
import MailList from './components/MailBox/sidebar/MailList';

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
          <Route exact path='/inbox'>
            <Home/>
            <MailList/>
            <Menu/>
          </Route>
          <Route exact path='/sent'>
            <Home/>
            <SentEmail/>
            <Menu/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
