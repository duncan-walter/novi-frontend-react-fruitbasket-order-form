import './FruitCounter.css';

function FruitCounter({title, state, setState}) {
  function handleFruitAmountMutation(state, setState, mutationAmount) {
    if (state + mutationAmount > -1) {
      setState(state + mutationAmount);
    }
  }

  return (
    <div>
      <span>{title}</span>
      <button onClick={() => { handleFruitAmountMutation(state, setState, -1)}}>-</button>
      <span>{state}</span>
      <button onClick={() => { handleFruitAmountMutation(state, setState, 1)}}>+</button>
    </div>
  );
}

export default FruitCounter;