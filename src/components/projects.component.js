import React, {Component} from "react";
import Thumbnail from "./thumbnails.prop";
import Navbar from "./navbar.component";

export default class Projects extends Component {
    render() {
        return(
            <div>
                <Navbar/>
                <section className="resume-section" id="education">
                    <div className="resume-section-content">
                        <h2 className="mb-5">Projects</h2>
                        <Thumbnail
                            link="https://github.com/sytan98/Fashion-Detection-Brainhack2020"
                            image="img/project_1.jpg"
                            title="Fashion Detection"
                            category="Machine Learning"
                            description="This project was part of BrainHack Today I Learned AI Camp 2020 Qualifier stage. We created an ensemble of object detection models to
                            detect and recognise types of clothes and utilised NLP to identify gender and clothes-specific
                            words from text. We were given images of people wearing certain types of fashion items (tops, trousers, outerwear, dresses and skirts) as well as bounding boxes for the different categories. We needed to train an object detection model for this.
                            "
                        />
                        <hr class="m-3" />
                        <Thumbnail
                            link="https://github.com/sytan98/Rover-Path-Planning-Brainhack2020"
                            image="img/project_2.jpg"
                            title="Path Planning"
                            category="Algorithms and Robotics"
                            description="This project was part of BrainHack Today I Learned AI Camp 2020 Final stage. With a Tello API drone and a DJI Robomaster EP rover, our objective was to use the drone to fly and capture a bird's eye view of the arena and to plot out a path for the rover. The arena has routes that are black in colour which the rover is allowed to travel on and has obstacles littered around the arena. Thus, we will need to process the picture taken by the drone and plan a path from the start point to the end point that avoids the obstacles.
                            "
                        />
                        <hr class="m-3" />
                        <Thumbnail
                            link="https://github.com/sytan98/Personal-Website"
                            image="img/project_3.jpg"
                            title="Personal Website"
                            category="Web development"
                            description="I took an existing html template and customised it to use React Components to represent different parts of my Website. It was really fun way to learn React. The website is hosted using gh pages."
                        />
                        <hr class="m-3" />
                        <Thumbnail
                            link="https://www.icdss.club/index.html"
                            image="img/project_4.jpg"
                            title="ICDSS Website"
                            category="Web development"
                            description="One of my first few ventures into web programming. Leveraged a pre exisiting template and customised it for the society. Had to pick up SCSS and bootstrap."
                        />
                        <hr class="m-3" />
                        <Thumbnail
                            link="https://github.com/sytan98/study-planner-app"
                            image="img/project_6.jpg"
                            title="Study Planning App"
                            category="Full Stack Development"
                            description="The plan for this project is to create a full stack application to learn how to use Flask as a backend to create an API for my react frontend. It should give the functionality of recording different subjects as well as the tasks for each subject."
                        />
                        <hr class="m-3" />
                    </div>
                    
                </section>
            </div>
           
        )
    }
}