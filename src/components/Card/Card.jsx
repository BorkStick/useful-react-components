import React from "react";

export default function Card(props) {
  return (
    <div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">
            {props.text}
          </p>
          <a href={props.href} class="btn btn-dark">
            View
          </a>
        </div>
      </div>
    </div>
  );
}
