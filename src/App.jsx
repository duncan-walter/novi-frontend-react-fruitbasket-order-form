import './App.css'
import { useState } from 'react';
import FruitCounter from "./components/FruitCounter.jsx";

function App() {
  const [strawBerryAmountState, setStrawBerryAmountState] = useState(0);

  return (<>
    <h1>Fruitmand bezorgservice</h1>
    <FruitCounter
      title="🍓 Aardbeien"
      state={strawBerryAmountState}
      setState={setStrawBerryAmountState}
    />
    🍌🍏🥝
  </>)
}

export default App
