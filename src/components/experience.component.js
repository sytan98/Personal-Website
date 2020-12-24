import React, {Component} from "react";

export default class Experience extends Component {
    render(){
        return(
            <section className="container">
                <h2>Internships</h2>
                <div class="container">
                    <ul>
                        <li>Defence Science Technology Agency (DSTA)</li>
                        <p>From December 2018 to March 2019, I did an internship with Defence Science Technology Agency (Singapore). 
                            My work comprised of researching and training various models that uses deep learning convolutional neural 
                            networks for human re-identification projects. I was also chosen to give a Machine Learning introduction with 
                            Google Colab workshop to high school students.
                        </p>
                        <li>Neuron Mobility</li>
                        <p>I also interned with Neuron Mobility Pte Ltd from June 2019 to September 2019, the largest E-scooter sharing 
                            start-up in Southeast Asia. I was a Data Intern and helped to run data analysis and build data pipelines on 
                            scooter and trip data. Joining at a phase of steep growth, I was also involved with other tasks such as the 
                            launch of operations in another city, enhancing my versatility and problem-solving skills.
                        </p>
                    
                    </ul>
                </div>
            </section>
        )
    }
}