import React, {Component} from "react";
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="backgrnd navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <Link className="navbar-brand js-scroll-trigger" to ="/">
                    <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile_pic.jpg" alt="" /></span>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link to ="/" className="nav-link js-scroll-trigger">About</Link></li>
                        <li className="nav-item"><Link to ="/resume" className="nav-link js-scroll-trigger">Resume</Link></li>
                        <li className="nav-item"><Link to ="/projects" className="nav-link js-scroll-trigger">Projects</Link></li>
                    </ul>
                </div>
            </nav>
            
        )
    }

}