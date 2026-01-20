import { useEffect, useState } from "react"
import api from "../services/api"
import TodoItem from "../components/TodoItem"

const Dashboard = () => {

    const [todos, setTodos] = useState([])
    const [title, setTitle] = useState("")

    const fetchTodos = async (completed) => {
        const res = await api.get("/todos", { params: { completed } })
        setTodos(res.data)
    }

    useEffect(()=> {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchTodos()
    }, [])

    const addTodo = async () => {
        if (!title.trim()) return;
        await api.post("/todos", { title })
        setTitle("")
        fetchTodos()
    }

    const logout = () => {
        localStorage.removeItem("token")
        window.location.href = "/login"
    }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">My Todos</h2>
                <button 
                    onClick={logout}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Logout
                </button>
            </div>

            <div className="bg-white rounded-lg shadow p-4 mb-6">
                <div className="flex gap-2">
                    <input 
                        type="text" 
                        placeholder="New Todo" 
                        value={title} 
                        onChange={(e)=> setTitle(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && addTodo()}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button 
                        onClick={addTodo}
                        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Add
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
                {todos.length === 0 ? (
                    <p className="p-8 text-center text-gray-500">No todos yet. Add one above!</p>
                ) : (
                    <div className="flex flex-col gap-2 p-2">
                        {todos.map((todo) => (
                            <TodoItem key={todo._id} todo={todo} refresh={fetchTodos}/>
                        ))}
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Dashboard