import './App.css';
import Planets from "./components/Planets";
import PlanetDetail from "./components/PlanetDetail";
import {useState} from "react";

function App() {
  const [postId, setPostId] = useState(1);
  const handleElementSelect = id => {
    setPostId(id);
  }
  return (
    <div className="App">
      <Planets onElementSelect={handleElementSelect}/>
      <PlanetDetail postId={postId}/>
    </div>
  );
}

export default App;
