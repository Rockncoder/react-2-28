import React from "react"
import ReactDOM from "react-dom"
import TodoStore from "./TodoStore"
import TodoList from "./TodoList"

const app = document.getElementById("root")

ReactDOM.render(<TodoList store={TodoStore} />, app)

