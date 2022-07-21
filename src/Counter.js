import {useState} from "react";

const Counter = (props) => {
  const [counter, setCounter] = useState(0);

  const increment = counter => {
    setCounter(++counter);
  }

  const decrement = counter => {
    counter !== 0 && setCounter(--counter);
  }

  return (
    <div className={'has-text-centered'}>
      <h4>useState Hook</h4>
      <div className={'is-inline-flex'}>
        <button
          className={'button is-primary has-text-weight-bold mr-4'}
          onClick={() => decrement(counter)}>
          -
        </button>
        <input
          type="number"
          className={'column input is-primary has-text-centered'}
          value={counter}
          onChange={e => {
            setCounter(e.target.value);
          }}/>
        <button
          className={'button is-primary has-text-weight-bold ml-4'}
          onClick={() => increment(counter)}>
          +
        </button>
      </div>
      <p><b>Counter:</b> <span>{counter}</span></p>
    </div>
  );
}

export default Counter;
