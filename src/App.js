import './App.css';
import Input from "./Input";
import {useRef} from "react";

function App() {
  const inputRef = useRef();
  const handleDisplayInputValue = () => {
    alert(`The input stores: ${inputRef.current.value}`)
  }

  return (
    <div className="App content">
      <div className={'container'}>
        <div className={'column is-8 is-offset-2'}>
          <h1>React Hooks!</h1>
          <Input
            ref={inputRef}
            label={'Name'}
            type="text"
            placeholder={'Enter Name'}
          />
          <br/>
          <button className={'button has-text-centered'} onClick={handleDisplayInputValue}>Click</button>
        </div>
      </div>
    </div>
  );
}

export default App;
