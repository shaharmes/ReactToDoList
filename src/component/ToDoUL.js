import React from "react";


export function ToDoUL({ items, onClickRemove, toggle }) {

  function handleRemove(event) {
    const text = event.target.previousSibling.innerText;
    event.target.parentNode.parentNode.remove();
    const index = items.findIndex((item) => item.title === text);
    console.log(items);
    console.log(index);
    onClickRemove(index);
  }

  function handleToggle(event) {
    const text = event.target.nextSibling.innerText;
    const index = items.findIndex((item) => item.title === text);
    toggle(index);
  }
  
  return (
    <ul className="todo-list">
      { items.map( (item, index) => (
          <li>
            <div className="view">
              <input className="toggle" type="checkbox"
                     onChange={handleToggle} />
              <label>{item.title}</label>
              <button className="destroy"
                      onClick={handleRemove} />
            </div>
            <input className="edit" />
          </li>
      ))}
    </ul>
  );
}
