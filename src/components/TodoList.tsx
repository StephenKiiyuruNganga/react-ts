import "./TodoList.css"

interface TodoListProps {
  items: { id: number; desc: string }[]
  onDeleteTodo: (id: number) => void
}

const TodoList: React.FC<TodoListProps> = ({ items, onDeleteTodo }) => {
  return (
    <ul>
      {items.map((t) => (
        <li key={t.id}>
          <span>{t.desc}</span>
          <button onClick={() => onDeleteTodo(t.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
