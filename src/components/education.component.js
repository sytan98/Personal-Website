import React, {Component} from "react";

export default class Education extends Component {
    render(){
        return(
            <div>
                <section className="resume-section" id="education">
                    <div className="resume-section-content">
                        <h2 className="mb-5">Education</h2>
                        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div className="flex-grow-1">
                                <h3 className="mb-0">Imperial College London</h3>
                                <div className="subheading mb-3">Bachelor of Engineering</div>
                                <div>Electronic and Information Engineering</div>
                                <p>First className</p>
                            </div>
                            <div className="flex-shrink-0"><span className="text-primary">Sept 2019 - Present</span></div>
                        </div>
                        <div className="d-flex flex-column flex-md-row justify-content-between">
                            <div className="flex-grow-1">
                                <h3 className="mb-0">Dunman High School</h3>
                                <div className="subheading mb-3">Singapore GCE A Levels</div>
                                <p>8 Distinctions</p>
                            </div>
                            <div className="flex-shrink-0"><span className="text-primary">Jan 2011 - Oct 2016</span></div>
                        </div>
                    </div>
                </section>
                <section className="resume-section" id="skills">
                    <div className="resume-section-content">
                        <h2 className="mb-5">Skills</h2>
                        <div className="subheading mb-3">Programming Languages & Tools</div>
                        <p>Advanced</p>
                        <ul className="list-inline dev-icons">
                            <li className="list-inline-item"><i className="fab fa-python"></i></li>
                            <li className="list-inline-item"><i className="fab fa-cuttlefish"></i></li>
                        </ul>
                        <p>Intermediate</p>
                        <ul className="list-inline dev-icons">
                            <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                            <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
                            <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
                            <li className="list-inline-item"><i className="fab fa-react"></i></li>
                            <li className="list-inline-item"><i className="fab fa-node-js"></i></li>
                        </ul>
                        <p>Beginner</p>

                        <ul className="list-inline dev-icons">
                            <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                            <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
                            <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
                            <li className="list-inline-item"><i className="fab fa-angular"></i></li>
                            <li className="list-inline-item"><i className="fab fa-react"></i></li>
                            <li className="list-inline-item"><i className="fab fa-node-js"></i></li>
                        </ul>
                    </div>
                </section>
            </div>
            
            

        )
    }
}