import './App.css'
import { useState } from 'react';
import FruitCounter from "./components/FruitCounter.jsx";

function App() {
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
  </>)
}

export default App
