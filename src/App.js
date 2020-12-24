import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {HashRouter as Router, Route} from "react-router-dom";

import Home from "./components/home.component";
import Resume from "./components/resume.component";
import Navbar from "./components/navbar.component";
import Projects from "./components/projects.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <br/>
        <Route path = "/" exact component = {Home}/>
        <Route path = "/resume" exact component = {Resume}/>
        <Route path = "/projects" exact component = {Projects}/>
      </div>

    </Router>
  );
}

export default App;
