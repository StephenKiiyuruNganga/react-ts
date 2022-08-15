import { useState } from "react"
import NewTodo from "./components/NewTodo"
import TodoList from "./components/TodoList"
import { Todo } from "./todo.model"

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (text: string) => {
    console.log(text)
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: prevTodos.length + 1, desc: text },
    ])
  }

  const deleteTodoHandler = (targetId: number) => {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== targetId))
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos} onDeleteTodo={deleteTodoHandler} />
    </div>
  )
}

export default App
