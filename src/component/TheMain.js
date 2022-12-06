import React from "react";
import {ToDoUL} from "./ToDoUL.js";

export function TheMain(props) {
  return (
    <section class="main">
      <input class="toggle-all" type="checkbox" />
      <ToDoUL items = {props.items} 
              onClickRemove = {props.onClickRemove}
              toggle = {props.toggleComplete} />
    </section>
  );
}
