import * as React from "react";
import "./style.css";

const img = ({ visibility, picture, title }) => (
  <div>
    <div id="myModal" className="modal" style={{ visibility }}>
      <a href="/dashboard/Ads">
        <span
          role="button"
          tabIndex={0}
          className="close"
          onClick={() => {
            document.getElementById("myModal").style.visibility = "hidden";
          }}
          onKeyDown={() => {
            document.getElementById("myModal").style.visibility = "hidden";
          }}
        >
          &times;
        </span>
      </a>
      <img className="modal-content" id="img01" src={picture} alt={title} />
      <div id="caption">{title}</div>
    </div>
  </div>
);

export default img;
