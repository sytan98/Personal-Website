import React, {Component} from "react";
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="backgrnd navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile_pic.jpg" alt="" /></span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link to ="/" className="nav-link js-scroll-trigger">About</Link></li>
                        <li className="nav-item"><Link to ="/education" className="nav-link js-scroll-trigger">Education</Link></li>
                        <li className="nav-item"><Link to ="/experience" className="nav-link js-scroll-trigger">Experience</Link></li>
                        <li className="nav-item"><Link to ="/projects" className="nav-link js-scroll-trigger">Projects</Link></li>
                    </ul>
                </div>
            </nav>
            
        )
    }

}