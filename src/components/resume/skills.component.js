import React, {Component} from "react";

export default class Skills extends Component {
    render(){
        return(
            <section className="resume-section" id="skills">
                <div className="resume-section-content">
                    <h2 className="mb-5">Skills</h2>
                    <div className="subheading mb-3">Programming Languages & Tools</div>
                    <p className="lead mb-5">Advanced</p>
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item"><i className="fab fa-python"></i></li>
                        <li className="list-inline-item"><i className="fab fa-cuttlefish"></i></li>
                    </ul>
                    <p className="lead mb-5">Intermediate</p>
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item"><i className="fab fa-git"></i></li>
                        <li className="list-inline-item"><i className="fab fa-aws"></i></li>
                        <li className="list-inline-item"><i className="fab fa-linux"></i></li>
                        <li className="list-inline-item">SQL</li>
                    </ul>
                    <p className="lead mb-5">Beginner</p>

                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                        <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
                        <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
                        <li className="list-inline-item"><i className="fab fa-react"></i></li>
                        <li className="list-inline-item"><i className="fab fa-node-js"></i></li>
                    </ul>
                </div>
            </section>
        )
    }
}