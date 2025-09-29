import './App.css'
import UserCard from './components/UserCard.jsx'
import CustomButton from './components/CustomButton';
import Producto from './components/Producto.jsx';


function App() {
  return (
    <>
    <h1>Actividad Grupal</h1>
    
    <h2>User Card</h2>
    <UserCard
      name="Juan Pérez"
      email="juanperez@example.com"
      age={28}
      isOnline={true}
    />
    
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
