import React from "react";

function Tools(props) {
  return (
    <div className={props.Tools_maindiv}>
      <FontAwesomeIcon icon="fa-brands fa-js" />
      <div className={props.Tools_div}>
        <ul className="list_tools">
          <li>{props.tool1}</li>
          <li>{props.tool2}</li>
          <li>{props.tool3}</li>
          <li>{props.tool4}</li>
          <li>{props.tool5}</li>
          <li>{props.tool6}</li>
        </ul>
      </div>

      <div className={props.Tools_div2}>
        <ul className="list_tools">
          <li>
            <a href="#">{props.tool7} </a>
          </li>
          <li>
            <a href="#">{props.tool8} </a>
          </li>
          <li>
            <a href="#">{props.tool9} </a>
          </li>
          <li>
            <a href="#">{props.tool10} </a>
          </li>
          <li>
            <a href="#">{props.tool11} </a>
          </li>
          <li>
            <a href="#">{props.tool12} </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Tools;
