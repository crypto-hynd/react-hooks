import './App.css';
import Counter from "./Counter";

function App() {
  return (
    <div className="App content">
      <div className={'container'}>
        <div className={'column is-8 is-offset-2'}>
          <h1>React Hooks!</h1>
          <Counter initialState={{counter: 0, showText: false}}/>
        </div>
      </div>
    </div>
  );
}

export default App;
