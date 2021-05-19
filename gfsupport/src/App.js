import Main from './components/views/Main'
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import { Compte } from './components/views/Compte/Compte'
import {Login} from './components/admin/auth/Login'
import { Dashboard } from './components/admin/Views/dashboard'
import {PrivateRoute} from './ProtectedRoute'
function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/admin" component/>
            <Route path="/compte" component={Compte} />
            <Route path="/auth" component={Login} />
            <Route path="/cartes" component/>
            <Route path="/issues" component/>
            <Route exact path="/" component={Main}/>
            <PrivateRoute path="/dashboard">
              <Dashboard/>
            </PrivateRoute>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
