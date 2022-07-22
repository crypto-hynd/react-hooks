import {useReducer} from "react";

const init = initialState => {
  return initialState;
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'decrement': {
      const counter = state.counter > 0 ? state.counter - 1 : 0;
      return {counter: counter, showText: counter !== 0};
    }
    case 'increment' : {
      const counter = state.counter + 1;
      return {counter: counter, showText: counter !== 0};
    }
    case 'reset': {
      return init(action.payload)
    }
    case 'changeValue': {
      return {counter: action.payload, showText: state.showText};
    }
    default:
      throw new Error();
  }
}

const Counter = ({initialState}) => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  return (
    <div className={'has-text-centered'}>
      <h4>useState Hook</h4>
      <div className={'is-inline-flex'}>
        <button
          className={'button is-primary has-text-weight-bold mr-4'}
          onClick={() => dispatch({type: 'decrement'})}>
          -
        </button>
        <input
          type="number"
          className={'column input is-primary has-text-centered'}
          value={state.counter}
          onChange={e => dispatch({type: 'changeValue', payload: e.target.value})}
          />
        <button
          className={'button is-primary has-text-weight-bold ml-4'}
          onClick={() => dispatch({type: 'increment'})}>
          +
        </button>
      </div>
      {
        state.showText &&
        <p>
          <b>Counter:</b> <span>{state.counter}</span>
          <br/>
          <button className={'button is-danger'} onClick={() => dispatch({type: 'reset', payload: initialState})}>reset</button>
        </p>
      }
    </div>
  );
}

export default Counter;
