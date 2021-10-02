import React from "react";
import ComponentList from "../ComponentList/ComponentList";

export default function ComponentCategory(props) {
  return (
    <div>
      <div class="card">
        <div class="card-header">{props.category}</div>
        <div class="card-body">
            <ComponentList />
        </div>
      </div>
    </div>
  );
}
