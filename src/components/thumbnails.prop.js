import React from "react";

function Thumbnail(props) {
    return (
      <div className="container-fluid mb-1">
        <div className="row">
          <div className="col-sm">
            <div className="subheading mb-3">{props.title}</div>
            <p className="lead mb-5">{props.category}</p>
            <p>{props.description}</p>
            <div className="social-icons">
              <a className="social-icon" href={props.link}><i className="fab fa-github"></i></a>
            </div>
          </div>
          <div className="col-sm">
            <a href={props.link}>
              <div>
                <img class="img-fluid" src={props.image} alt="Project"/>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
export default Thumbnail;