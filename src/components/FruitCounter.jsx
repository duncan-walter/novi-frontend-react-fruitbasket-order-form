import './FruitCounter.css';

import Button from './Button.jsx';

function FruitCounter({title, state, setState, name}) {
  const increaseAmount = 1;
  const decreaseAmount = -1;
  const minimumAmount = 0;

  function increaseFruitAmount() {
    handleFruitAmountMutation(state, setState, increaseAmount);
  }

  function decreaseFruitAmount() {
    handleFruitAmountMutation(state, setState, decreaseAmount);
  }

  function handleFruitAmountMutation(state, setState, mutationAmount) {
    if (state + mutationAmount > minimumAmount - 1) {
      setState(name, state + mutationAmount);
    } else {
      setState(name, minimumAmount);
    }
  }

  return (
    <div className={state > minimumAmount ? 'fruit-counter fruit-counter-active' : 'fruit-counter'}>
      <span className="fruit-counter-title">{title}</span>
      <div className="fruit-counter-controls">
        <Button text="-" type="button" handleClick={decreaseFruitAmount}/>
        <span className="fruit-counter-amount">{state}</span>
        <Button text="+" type="button" handleClick={increaseFruitAmount}/>
      </div>
    </div>
  );
}

export default FruitCounter;