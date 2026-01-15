import api from "../services/api"

const TodoItem = ({todo, refresh}) => {
    const toggle = async () => {
        await api.patch(`/todos/${todo._id}/toggle`)
        refresh()
    }
    const remove = async () => {
        await api.delete(`/todos/${todo._id}`)
        refresh()
    }
  return (
    <div className="flex items-center gap-3 p-3 hover:bg-gray-50">
        <div 
            onClick={toggle} 
            className="flex items-center gap-3 flex-1 cursor-pointer"
        >
            <div className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-colors ${
                todo.completed ? 'bg-blue-500 border-blue-500' : 'border-gray-300'
            }`}>
                {todo.completed && (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                )}
            </div>
            <span className={`${
                todo.completed ? 'line-through text-gray-400' : 'text-gray-700'
            }`}>
                {todo.title}
            </span>
        </div>
        <button 
            onClick={remove}
            className="text-red-500 hover:text-red-700 px-2"
        >
            ❌
        </button>
    </div>
  )
}

export default TodoItem