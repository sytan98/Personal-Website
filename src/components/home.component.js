import React, {Component} from "react";
import Navbar from "./navbar.component";

export default class Home extends Component {
    render(){
        return(
            <div>
                <Navbar/>
                <section className="container resume-section" id="about">
                    <div className="resume-section-content">
                        <h1 className="mb-0">
                            Lionel
                            <span className="text-primary">Tan</span>
                        </h1>
                        <div className="subheading mb-5">
                            Imperial College London · United Kingdom · 
                            <a className="text-primary" href="mailto:tansiyu1@gmail.com">tansiyu1@gmail.com</a>
                        </div>
                        <p className="lead mb-5"><b>Hi there!</b> I'm a second year at Imperial College London studying Electronic and Information Engineering. I'm a Singaporean who enjoys hiking and 
                        doing outdoor activites. I have a strong passion in Data Science and am a currently the Head of Operations of 
                        Imperial College Data Science Society (ICDSS). I have a very strong drive in the pursuit of knowledge and am always seeking ways
                        to improve my skills or learning new things.</p>
                        <div className="social-icons">
                            <a className="social-icon" href="https://www.linkedin.com/in/si-yu-lionel-tan-28a414105/"><i className="fab fa-linkedin-in"></i></a>
                            <a className="social-icon" href="https://github.com/sytan98"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </section>
            </div>
            
            
        )
    }
}