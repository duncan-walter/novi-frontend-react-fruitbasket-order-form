import './App.css'
import { useState } from 'react';

function App() {
  const [strawBerryAmountState, setStrawBerryAmountState] = useState(0);

  function handleFruitAmountMutation(setCallback, currentAmount, mutationAmount) {
    if (currentAmount + mutationAmount > -1) {
      setCallback(currentAmount + mutationAmount);
    }
  }

  return (<>
    <h1>Fruitmand bezorgservice</h1>
    <div>
      <span>🍓 Aardbeien</span>
      <button onClick={() => { handleFruitAmountMutation(setStrawBerryAmountState, strawBerryAmountState, -1)}}>-</button>
      <span>{strawBerryAmountState}</span>
      <button onClick={() => { handleFruitAmountMutation(setStrawBerryAmountState, strawBerryAmountState, 1)}}>+</button>
    </div>🍌🍏🥝
  </>)
}

export default App
