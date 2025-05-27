import './App.css'
// Voor deze opdracht heb ik er voor gekozen om "useState" van React zelf te gebruiken om de basis goed onder de knie te krijgen.
// In de toekomst stap ik over op React Form Hook.
import { useState } from 'react';
import FruitCounter from "./components/FruitCounter.jsx";

function App() {
  function resetAmounts() {
    setStrawBerryAmountState(0);
    setBananaAmountState(0);
    setAppleAmountState(0);
    setKiwiAmountState(0);
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(`Strawberry count: ${strawBerryAmountState}`);
    console.log(`Banana count: ${bananaAmountState}`);
    console.log(`Apple count: ${appleAmountState}`);
    console.log(`Kiwi count: ${kiwiAmountState}`);

    // Dit lijkt mij een nogal omslachtige manier om de values te loggen, maar het is wat het is voor nu.
    const form = e.target;
    console.log(`Firstname: ${form.querySelector('input[name="firstname"]').value}`);
    console.log(`Lastname: ${form.querySelector('input[name="lastname"]').value}`);
    console.log(`Age: ${form.querySelector('input[name="age"]').value}`);
    console.log(`Zipcode: ${form.querySelector('input[name="zipcode"]').value}`);
    console.log(`Delivery frequency: ${form.querySelector('select[name="delivery-frequency"]').value}`);
    console.log(`Delivery window: ${e.target.querySelector('input[name="delivery-window"]:checked').value}`);
    console.log(`Remarks: ${form.querySelector('textarea[name="remarks"]').value}`);
    console.log(`Consent: ${form.querySelector('input[name="consent"]').checked}`);
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

    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstname">Voornaam:</label>
        <input type="text" name="firstname" id="firstname"/>
      </div>

      <div>
        <label htmlFor="lastname">Achternaam:</label>
        <input type="text" name="lastname" id="lastname"/>
      </div>

      <div>
        <label htmlFor="age">Leeftijd:</label>
        <input type="text" name="age" id="age"/>
      </div>

      <div>
        <label htmlFor="zipcode">Postcode:</label>
        <input type="text" name="zipcode" id="zipcode"/>
      </div>

      <div>
        <label htmlFor="delivery-frequeny">Bezorgfrequentie:</label>
        <select name="delivery-frequency" id="delivery-frequency">
          <option value="every-week">Iedere week</option>
          <option value="every-other-week">Om de week</option>
          <option value="every-month">Iedere maand</option>
        </select>
      </div>

      <div>
        <fieldset>
          <legend>Bezorgmoment</legend>

          <label htmlFor="day-time">Overdag</label>
          <input type="radio" name="delivery-window" id="day-time" value="day-time" checked/>

          <label htmlFor="night-time">&apos;s Avonds</label>
          <input type="radio" name="delivery-window" id="night-time" value="night-time"/>
        </fieldset>
      </div>

      <div>
        <label htmlFor="remarks">Opmerking</label>
        <textarea name="remarks" id="remarks" cols="30" rows="10"></textarea>
      </div>
      
      <div>
        <input type="checkbox" name="consent" id="consent"/>
        <label htmlFor="consent">Ik ga akkoord met de voorwaarden</label>
      </div>

      <button type="submit">Verzend</button>
    </form>
  </>)
}

export default App
