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

      
    </>
  )
}

export default App
