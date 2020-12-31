import './App.css';
import {HashRouter as Router, Route} from "react-router-dom";

import Home from "./components/home.component";
import Resume from "./components/resume.component";
import Projects from "./components/projects.component";

function App() {
  return (
    <Router>
        <Route path = "/" exact component = {Home}/>
        <Route path = "/resume" exact component = {Resume}/>
        <Route path = "/projects" exact component = {Projects}/>
    </Router>
  );
}

export default App;
