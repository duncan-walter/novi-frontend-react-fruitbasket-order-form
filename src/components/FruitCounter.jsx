import './FruitCounter.css';

import Button from './Button.jsx';

function FruitCounter({title, state, setState, name}) {
  return (
    <div className={state > 0 ? 'fruit-counter fruit-counter-active' : 'fruit-counter'}>
      <span className="fruit-counter-title">{title}</span>
      <div className="fruit-counter-controls">
        <Button text="-" type="button" handleClick={() => setState(name, state === 0 ? state : state - 1)}/>
        <span className="fruit-counter-amount">{state}</span>
        <Button text="+" type="button" handleClick={() => setState(name, state + 1)}/>
      </div>
    </div>
  );
}

export default FruitCounter;