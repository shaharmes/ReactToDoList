import React from "react";
import NewInput from "./NewInput";
import Title from "./Title";

export default function TheHeader() {
  return (
    <header class="header">
      <Title />
      <NewInput />
    </header>
  );
}
