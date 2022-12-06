import React from "react";

export function TheFooter({clearAll}) {

  function handleClearCompleted() {
    console.log("clear completed");
    clearAll();
  }

  return (
    <footer class="footer">
      <span class="todo-count">
        <strong>0</strong> items left
      </span>
      <button class="clear-completed"
              onClick={handleClearCompleted}>Clear completed</button>
    </footer>
  );
}
