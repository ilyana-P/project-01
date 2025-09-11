import './App.css'
import DogCard from './components/DogCard/DogCard'
import Goodbye from './components/Goodbye/Goodbye'
import Greeting from './components/Greeting/Greeting'
import ProfileCard from './components/ProfileCard/ProfileCard'

function App() {
  return (
    <>
    <p> Hello,React!</p>
     <Greeting/>
     <Greeting/>
     <Greeting/>
     <Goodbye name={"Bob"}/>
     <Goodbye name={"John"}/>
     <DogCard/>
     <ProfileCard
     avatar="https://media.istockphoto.com/id/458587791/de/foto/fremder-tides-poster-auf.jpg?s=612x612&w=is&k=20&c=MA6dH_6ZKmrGuO_BOXkM_cGWw9T3J0uAfY7WXl0phrI="
     name= "Captain Jack Sparrow"
     description= "Pirate Lord of the Caribbean sea"
     />
    
    </>
  )
}

export default App