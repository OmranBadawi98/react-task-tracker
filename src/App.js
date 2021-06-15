import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState, useEffect } from 'react'
// import DB from '../src/db.json'

const App = () => {
  const [showAddTask, sethowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Hello world',
      day: 'Feb 6th at 1:30pm',
      reminder: false,
    },
  ])

  // useEffect(() => {
  //   const getTasks = async () => {
  //     const tasksFromServer = await fetchTasks()
  //     setTasks(tasksFromServer)
  //   }
  //   getTasks()
  // }, [])
  // Fetch Tasks
  // const fetchTasks = async () => {
  //   const res = await fetch('httl://localhost:5000/tasks')
  //   const data = await res.json()

  //   return data
  // }

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete  Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  // Togge Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  return (
    <div className='container'>
      <Header onAdd={() => sethowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks To Show'
      )}
    </div>
  )
}

export default App
