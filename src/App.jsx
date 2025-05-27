import './App.css'
import { useState } from 'react';
import FruitCounter from "./components/FruitCounter.jsx";

function App() {
  function resetAmounts() {
    setStrawBerryAmountState(0);
    setBananaAmountState(0);
    setAppleAmountState(0);
    setKiwiAmountState(0);
  }

  const [strawBerryAmountState, setStrawBerryAmountState] = useState(0);
  const [bananaAmountState, setBananaAmountState] = useState(0);
  const [appleAmountState, setAppleAmountState] = useState(0);
  const [kiwiAmountState, setKiwiAmountState] = useState(0);

  return (<>
    <h1>Fruitmand bezorgservice</h1>
    <FruitCounter
      title="🍓 Aardbeien"
      state={strawBerryAmountState}
      setState={setStrawBerryAmountState}
    />
    <FruitCounter
      title="🍌 Bananen"
      state={bananaAmountState}
      setState={setBananaAmountState}
    />
    <FruitCounter
      title="🍏 Appels"
      state={appleAmountState}
      setState={setAppleAmountState}
    />
    <FruitCounter
      title="🥝 Kiwi's"
      state={kiwiAmountState}
      setState={setKiwiAmountState}
    />
    <button type="button" onClick={resetAmounts}>Reset</button>
  </>)
}

export default App
