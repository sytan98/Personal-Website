import React from "react";

function Thumbnail(props) {
    return (
      <div className="container-fluid mb-1">
        <div className="row">
          <div className="col-sm">
            <div>{props.title}</div>
            <div>{props.category}</div>
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