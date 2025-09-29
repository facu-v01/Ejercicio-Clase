import './App.css'
import UserCard from './components/UserCard.jsx'

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
