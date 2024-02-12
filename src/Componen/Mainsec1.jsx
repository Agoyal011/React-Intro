import React from "react";

const Mainsec1 = (props) => {
  console.log(props.mainsec1_classheading2);
  return (
    <div className={props.mainsec1_div}>
      <div className="mainsec1-para">
        <span className="main_para">{props.title} </span>
        <span className="main_para">{props.title2} </span>
      </div>
      <div className="mainsec1-heading">
        <h1 className={props.mainsec1_classheading2}>
          {props.mainsec1_heading1}
        </h1>
        <h1>{props.mainsec1_heading2}</h1>
      </div>
    </div>
  );
};

export default Mainsec1;
