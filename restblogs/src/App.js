import "./App.css";
import Home from "./pages/home/Home";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./single/Single";
import Topbar from "./topbar/Topbar";
import Write from "./write/Write";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Context } from "./context/Context";
import {useContext} from "react";


function App() {
  const {user} = useContext(Context);
  return (
    <Router>
    <Topbar />
       <Switch>
         <Route exact path="/">
            <Home />
         </Route>
         <Route path="/contact">
            <Contact />
         </Route>
         <Route path="/register">
            { user ? <Home /> : <Register />}
         </Route>
         <Route path="/login">
         { user ? <Home /> : <Login />}
         </Route>
         <Route path="/write">
         { user ? <Write /> : <Register />}
         </Route>
         <Route path="/settings">
         { user ? <Settings /> : <Register />}
         </Route>
         <Route path="/post/:postId">
          <Single />
         </Route>
      </Switch>    
    </Router>
  );
}

export default App;
