import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import Todos from './components/todos/Todos.jsx'
import AddTodos from './components/addTodo/addTodos.jsx'

createRoot(document.getElementById('root')).render(
<Provider store={store}>
  <Todos />
  <AddTodos />
</Provider>
)
