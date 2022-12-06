import React from "react";
import LiLable from "./LiLable";

export default function ToDoLI() {
  return (
    <li>
      <div class="view">
        <input class="toggle" type="checkbox" />
        <LiLable />
        <button class="destroy" />
      </div>
      <input class="edit" />
    </li>
  );
}
