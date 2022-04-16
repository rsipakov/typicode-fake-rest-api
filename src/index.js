import { StrictMode } from "react";
import ReactDOM from "react-dom";

import TodoList from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <TodoList />
  </StrictMode>,
  rootElement
);
