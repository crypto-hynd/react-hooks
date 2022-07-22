import './App.css';
import LayoutEffect from "./LayoutEffect";

function App() {
  return (
    <div className="App content">
      <div className={'container'}>
        <div className={'column is-8 is-offset-2'}>
          <h1>React Hooks!</h1>
          <LayoutEffect/>
        </div>
      </div>
    </div>
  );
}

export default App;
