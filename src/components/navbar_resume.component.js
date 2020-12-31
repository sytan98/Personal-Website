import React, {Component} from "react";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default class NavbarResume extends Component {
    render() {
        return (
            <nav className="backgrnd navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <Link className="navbar-brand js-scroll-trigger" to ="/">
                    <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile_pic.jpg" alt="" /></span>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link to ="/" className="nav-link">About</Link></li>
                        <li className="nav-item"><Link to ="/resume" className="nav-link">Resume</Link></li>
                        <li className="nav-item"><HashLink to="/resume#education" smooth className="nav-link-small">Education</HashLink></li>
                        <li className="nav-item"><HashLink to="/resume#skills" smooth className="nav-link-small">Skills</HashLink></li>
                        <li className="nav-item"><HashLink to="/resume#experience" smooth className="nav-link-small">Experience</HashLink></li>
                        <li className="nav-item"><Link to ="/projects" className="nav-link">Projects</Link></li>
                    </ul>
                </div>
            </nav>
            
        )
    }

}