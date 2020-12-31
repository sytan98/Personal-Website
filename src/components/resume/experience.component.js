import React, {Component} from "react";

export default class Experience extends Component {
    render(){
        return(
            <section class="resume-section" id="experience">
                <div class="resume-section-content">
                    <h2 class="mb-5">Experience</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Teaching Assistant</h3>
                            <div class="subheading mb-3">Tinkertanker</div>
                            <p>Teaching assistant for the Web Programming course and Introduction to Data Science with Python course.</p>
                            <p>Tools Used: HTML, CSS, Javascript, Php, Python.</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">October 2020 - Present</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Regional Operations (Fraud Detection) Data Analyst Intern</h3>
                            <div class="subheading mb-3">Shopee</div>
                            <p>Built metrics to identify various types of fraud using SQL. Created a Business Requirement Document to improve current dashboards used by Fraud Agents.</p>
                            <p>Tools Used: SQL.</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">June 2020 - September 2020</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Data Engineer Intern</h3>
                            <div class="subheading mb-3">Neuron Mobility</div>
                            <p>Built and managed Data Pipelines between various sources and Amazon S3 and Redshift. Did Data Analytics with Pandas library on scooter trip data and Data Visualisation with Tableau to predict best locations to deploy scooters. I was also part of Scooter Sharing Operation Launch in Brisbane.</p>
                            <p>Tools Used: Python, Pandas, AWS Redshift, AWS EC2, Tableau</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">June 2019 - September 2019</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Spring Insight</h3>
                            <div class="subheading mb-3">UBS</div>
                            <p>Given an introduction to Financial Markets. Attended Sessions given on the various aspects of UBS’s operations in Global Banking, Research, Asset Management and Technology.</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">Apr 2020</span></div>
                    </div>
                </div>
                
            </section>
        )
    }
}