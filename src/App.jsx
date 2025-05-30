import './App.css';
// Voor deze opdracht heb ik er voor gekozen om "useState" van React zelf te gebruiken om de basis goed onder de knie te krijgen.
// In de toekomst stap ik over op React Form Hook.
import { useState } from 'react';

import Button from './components/Button.jsx';
import FruitCounter from './components/FruitCounter.jsx';
import TextFormControl from "./components/form-controls/TextFormControl.jsx";
import SelectFormControl from "./components/form-controls/SelectFormControl.jsx";
import RadioButtonGroupFormControl from "./components/form-controls/RadioButtonGroupFormControl.jsx";
import TextareaFormControl from "./components/form-controls/TextareaFormControl.jsx";
import CheckboxFormControl from "./components/form-controls/CheckboxFormControl.jsx";

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

    // Dit lijkt mij een nogal omslachtige manier om de values te loggen, maar het is wat het is voor nu zonder state.
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

  const [firstnameState, setFirstnameState] = useState("");
  const [lastnameState, setLastnameState] = useState("");
  const [ageState, setAgeState] = useState(0);
  const [zipcodeState, setZipcodeState] = useState("");
  const [deliveryFrequencyState, setDeliveryFrequencyState] = useState("every-week");
  const [deliveryWindowState, setDeliveryWindowState] = useState("day-time");
  const [remarksState, setRemarksState] = useState("");
  const [consentState, setConsentState] = useState(false);

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

    <Button text="Reset" type="button" action={resetAmounts}/>

    <form onSubmit={handleSubmit}>
      <TextFormControl
        label="Voornaam"
        name="firstname"
        state={firstnameState}
        setState={setFirstnameState}
      />

      <TextFormControl
        label="Achternaam"
        name="lastname"
        state={lastnameState}
        setState={setLastnameState}
      />

      <TextFormControl
        label="Leeftijd"
        name="age"
        state={ageState}
        setState={setAgeState}
      />

      <TextFormControl
        label="Postcode"
        name="zipcode"
        state={zipcodeState}
        setState={setZipcodeState}
      />

      <SelectFormControl
        label="Bezorgfrequentie"
        name="delivery-frequency"
        state={deliveryFrequencyState}
        setState={setDeliveryFrequencyState}
        options={[
          {value: "every-week", label: "Iedere week"},
          {value: "every-other-week", label: "Om de week"},
          {value: "every-month", label: "Iedere maand"}
        ]}
      />

      <RadioButtonGroupFormControl
        label="Bezorgmoment"
        name="delivery-window"
        state={deliveryWindowState}
        setState={setDeliveryWindowState}
        options={[
          {id: "day-time", value: "day-time", label: "Overdag"},
          {id: "night-time", value: "night-time", label: "'s Avonds"},
        ]}
      />

      <TextareaFormControl
        label="Opmerking"
        name="remarks"
        state={remarksState}
        setState={setRemarksState}
      />

      <CheckboxFormControl
        label="Ik ga akkoord met de voorwaarden"
        name="consent"
        state={consentState}
        setState={setConsentState}
      />

      <Button text="Verzend" type="submit"/>
    </form>
  </>);
}

export default App
