import React from "react";

export function TheHeader(props) {

  function handleKeyUp(event) {
    const { key, target } = event;
    const text = target.value.trim();
    if (key !== 'Enter' || text.length === 0) {
      return;
    }
    props.onPressAdd(text);
    target.value = "";
  }

  return (
    <header class="header">
      <h1>{props.title}</h1>
      <input class="new-todo" 
             placeholder= {props.placeHolder}
             onKeyUp={handleKeyUp} 
             autoFocus/>
    </header>
  );
}
