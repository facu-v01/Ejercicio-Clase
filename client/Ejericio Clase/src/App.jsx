import './App.css'
<<<<<<< HEAD
import UserCard from "../src/components/UserCard.jsx";
import CustomButton from '../src/components/CustomButton.jsx';
import TaskList from '../src/components/TaskList.jsx'
import { Producto } from '../src/components/Producto.jsx';
=======
import UserCard from './components/UserCard.jsx'
import CustomButton from './components/CustomButton';
import Producto from './components/Producto.jsx';
>>>>>>> 6dd5efe84bc7518c00c334b230996bd7e2f42e26


function App() {
  const tasks = [
    { id: 1, title: "Hacer la compra", completed: true },
    { id: 2, title: "Estudiar React", completed: false },
    { id: 3, title: "Ir al gimnasio", completed: true },
    { id: 4, title: "Entregar proximo spreen ITBA", completed: false },
  ];
  return (
    <>
<<<<<<< HEAD
    <div>
=======
    <h1>Actividad Grupal</h1>
    
    <h2>User Card</h2>
>>>>>>> 6dd5efe84bc7518c00c334b230996bd7e2f42e26
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
    
    <h2>Custom Button</h2>
    <CustomButton
      btnText="Click Me"
      variant="primary"
      size="medium"
      onClick={() => alert('Button clicked!')}
    />

    <h2>Producto</h2>
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
