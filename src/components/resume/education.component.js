import React, {Component} from "react";

export default class Education extends Component {
    render(){
        return(
            <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Imperial College London</h3>
                            <div className="subheading mb-3">Bachelor of Engineering</div>
                            <div>Electronic and Information Engineering</div>
                            <p>First class</p>
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
        )
    }
}