import './FruitCounter.css';

import Button from './Button.jsx';

function FruitCounter({title, state, setState}) {
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
      setState(state + mutationAmount);
    } else {
      setState(minimumAmount);
    }
  }

  return (
    <div>
      <span>{title}</span>
      <Button text="-" type="button" action={decreaseFruitAmount}/>
      <span>{state}</span>
      <Button text="+" type="button" action={increaseFruitAmount}/>
    </div>
  );
}

export default FruitCounter;