import "./App.css";
import Counter from "./components/Counter/Counter";
import DogCard from "./components/DogCard/DogCard";
import Goodbye from "./components/Goodbye/Goodbye";
import Greeting from "./components/Greeting/Greeting";
import PersonalGreeting from "./components/PersonalGreeting/PersonalGreeting";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import SpaceMissionsForm from "./components/SpaceMissionsForm/SpaceMissionsForm";

function App() {
  return (
    <>
      <PersonalGreeting/>
      <Greeting />
      <Counter />
      <Goodbye name={"Bob"} />
      <Goodbye name={"John"} />
      <DogCard />
      <ProfileCard
        avatar="https://media.istockphoto.com/id/458587791/de/foto/fremder-tides-poster-auf.jpg?s=612x612&w=is&k=20&c=MA6dH_6ZKmrGuO_BOXkM_cGWw9T3J0uAfY7WXl0phrI="
        name="Captain Jack Sparrow"
        description="Pirate Lord of the Caribbean sea"
      />
      <SpaceMissionsForm/>
    
    </>
  );
}

export default App;
