import './App.css'
import UserCard from "../src/components/UserCard.jsx";
import CustomButton from '../src/components/CustomButton.jsx';
import TaskList from '../src/components/TaskList.jsx'
import { Producto } from '../src/components/Producto.jsx';


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
    
    <CustomButton
      btnText="Click Me"
      variant="primary"
      size="medium"
      onClick={() => alert('Button clicked!')}
    />

    <Producto 
      name="Mesa de Pino"
      price={25000}
      category="Muebles de Comedor"
    />

    <Producto 
      name="Sillón"
      price={30000}
      discount={25}
      category="Muebles de Comedor"
    />
      
    </>
  )
}

export default App
