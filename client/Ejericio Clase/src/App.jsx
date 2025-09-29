import './App.css'
import UserCard from './components/UserCard.jsx'
import CustomButton from './components/CustomButton';
import { Producto } from './components/Producto.jsx';


function App() {
  return (
    <>
    <UserCard
      name="Juan Pérez"
      email="juanperez@example.com"
      age={28}
      isOnline={true}
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
