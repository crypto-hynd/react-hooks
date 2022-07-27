import './App.css';
import ImperativeHandle from "./ImperativeHandle";

function App() {
  return (
    <div className="App content">
      <div className={'container'}>
        <div className={'column is-8 is-offset-2'}>
          <h1>React Hooks!</h1>
          <ImperativeHandle/>
        </div>
      </div>
    </div>
  );
}

export default App;
