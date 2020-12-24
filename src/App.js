import './App.css';
import {HashRouter as Router, Route} from "react-router-dom";

import Home from "./components/home.component";
import Education from "./components/education.component";
import Experience from "./components/experience.component";
import Navbar from "./components/navbar.component";
import Projects from "./components/projects.component";

function App() {
  return (
    <Router>
      <div className="backgrnd">
        <Navbar/>
        <Route path = "/" exact component = {Home}/>
        <Route path = "/education" exact component = {Education}/>
        <Route path = "/experience" exact component = {Experience}/>
        <Route path = "/projects" exact component = {Projects}/>
      </div>

    </Router>
  );
}

export default App;
