import './App.css'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import { TaskProvider } from './utils/TaskContext'

function App() {

  return (
    <>
    <TaskProvider>
      <h1>Task Manager</h1>      
      <TaskInput />
      <TaskList />
    </TaskProvider>
    </>
  )
}

export default App
