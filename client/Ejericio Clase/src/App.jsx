import './App.css'
import UserCard from './components/UserCard.jsx'
import TaskList from './components/TaskList.jsx'

function App() {
  const tasks = [
    { id: 1, title: "Hacer la compra", completed: true },
    { id: 2, title: "Estudiar React", completed: false },
    { id: 3, title: "Ir al gimnasio", completed: true },
    { id: 4, title: "Entregar proximo spreen ITBA", completed: false },
  ];
  return (
    <>
    <div>
    <UserCard
    name="Gerson Benjamin Benitez"
    email="benjamin_benitez@outlook.com"
    age={22}
    isOnline={true}/>
    </div>

    <div>
      <h1>Mis tareas</h1>
      <TaskList tasks={tasks} />
    </div>
    
    
    
    

      
    </>
  )
}

export default App
