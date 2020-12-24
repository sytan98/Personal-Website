import React, {Component} from "react";
import Thumbnail from "./thumbnails.prop"
export default class Projects extends Component {
    render() {
        return(
            <div className= "container">
                <h3>Projects</h3>
                <Thumbnail
                    link="https://github.com/sytan98/ICDSS-FashionMNIST"
                    image="img/japan_pic.jpg"
                    title="Fashion MNIST"
                    category="Machine Learning"
                />
                
                <Thumbnail
                    link="https://github.com/sytan98/ICDSS-FashionMNIST"
                    image="img/japan_pic.jpg"
                    title="AI Hack"
                    category="Machine Learning"
                />
            </div>
        )
    }
}