import './App.css'
import UserCard from './components/UserCard.jsx'
import CustomButton from './components/CustomButton';


function App() {
  return (
    <>
    <UserCard
    name="Juan Pérez"
    email="juanperez@example.com"
    age={28}
    isOnline={true}
    />
    
    <CustomButton
    btnText="Click Me"
    variant="primary"
    size="medium"
    onClick={() => alert('Button clicked!')}
    />

      
    </>
  )
}

export default App
