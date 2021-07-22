import { Route, Switch } from "react-router-dom";
import Aside from "./components/aside/aside";
import Navbar  from "./components/navbar/navbar";
import Applicants from "./components/candidates/candidates"
import Profile from "./components/profile/profile";
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app-left">
        <Aside />
      </div>
      <div className="app-right">
      <Navbar />
      {/* <Router> */}
        <Switch>
          <Route path="/" exact>
            <Applicants />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>  
        </Switch>  
      {/* </Router> */}
      </div>  
    </div>
  );
}

export default App;
