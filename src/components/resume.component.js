import React, {Component} from "react";
import Experience from "./resume/experience.component";
import Education from "./resume/education.component";
import Skills from "./resume/skills.component";

import NavbarResume from "./navbar_resume.component";

export default class Resume extends Component {
    render(){
        return(
            <div>
                <NavbarResume/>
                <Education/>
                <hr class="m-0" />
                <Skills/>
                <hr class="m-0" />
                <Experience/>
                <hr class="m-0" />
            </div>
            

        )
    }
}