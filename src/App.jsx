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
  function resetFruitBasket() {
    setFruitBasketState({
      strawBerry: 0,
      banana: 0,
      apple: 0,
      kiwi: 0
    })
  }

  function handleFruitBasketChange(name, value) {
    setFruitBasketState({
      ...fruitBasketState,
      [name]: value
    })
  }

  function handleFormChange(e) {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setFormState({
      ...formState,
      [e.target.name]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("\n\n%cFruit basket:", "font-weight: bold; text-decoration: underline")
    console.log(`Strawberry count: ${fruitBasketState.strawBerry}`);
    console.log(`Banana count: ${fruitBasketState.banana}`);
    console.log(`Apple count: ${fruitBasketState.apple}`);
    console.log(`Kiwi count: ${fruitBasketState.kiwi}`);

    console.log("\n\n%cForm values:", "font-weight: bold; text-decoration: underline")
    console.log(`Firstname: ${formState.firstName}`);
    console.log(`Lastname: ${formState.lastName}`);
    console.log(`Age: ${formState.age}`);
    console.log(`Zipcode: ${formState.zipcode}`);
    console.log(`Delivery frequency: ${formState.deliveryFrequency}`);
    console.log(`Delivery window: ${formState.deliveryWindow}`);
    console.log(`Remarks: ${formState.remarks}`);
    console.log(`Consent: ${formState.consent}`);
  }

  const [fruitBasketState, setFruitBasketState] = useState({
    strawBerry: 0,
    banana: 0,
    apple: 0,
    kiwi: 0
  });

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    age: "",
    zipcode: "",
    deliveryFrequency: "every-week",
    deliveryWindow: "day-time",
    remarks: "",
    consent: false
  });

  return (<>
    <h1>Fruitmand bezorgservice</h1>

    <div className="fruit-counters">
      <FruitCounter
        title="🍓 Aardbeien"
        state={fruitBasketState.strawBerry}
        setState={handleFruitBasketChange}
        name="strawBerry"
      />

      <FruitCounter
        title="🍌 Bananen"
        state={fruitBasketState.banana}
        setState={handleFruitBasketChange}
        name="banana"
      />

      <FruitCounter
        title="🍏 Appels"
        state={fruitBasketState.apple}
        setState={handleFruitBasketChange}
        name="apple"
      />

      <FruitCounter
        title="🥝 Kiwi's"
        state={fruitBasketState.kiwi}
        setState={handleFruitBasketChange}
        name="kiwi"
      />

      <Button text="Reset" type="button" action={resetFruitBasket}/>
    </div>

    <form onSubmit={handleSubmit}>
      <TextFormControl
        label="Voornaam"
        name="firstName"
        state={formState.firstName}
        setState={handleFormChange}
      />

      <TextFormControl
        label="Achternaam"
        name="lastName"
        state={formState.lastName}
        setState={handleFormChange}
      />

      <TextFormControl
        label="Leeftijd"
        name="age"
        state={formState.age}
        setState={handleFormChange}
      />

      <TextFormControl
        label="Postcode"
        name="zipcode"
        state={formState.zipcode}
        setState={handleFormChange}
      />

      <SelectFormControl
        label="Bezorgfrequentie"
        name="deliveryFrequency"
        state={formState.deliveryFrequency}
        setState={handleFormChange}
        options={[
          {value: "every-week", label: "Iedere week"},
          {value: "every-other-week", label: "Om de week"},
          {value: "every-month", label: "Iedere maand"}
        ]}
      />

      <RadioButtonGroupFormControl
        label="Bezorgmoment"
        name="deliveryWindow"
        state={formState.deliveryWindow}
        setState={handleFormChange}
        options={[
          {id: "day-time", value: "day-time", label: "Overdag"},
          {id: "night-time", value: "night-time", label: "'s Avonds"},
        ]}
      />

      <TextareaFormControl
        label="Opmerking"
        name="remarks"
        state={formState.remarks}
        setState={handleFormChange}
      />

      <CheckboxFormControl
        label="Ik ga akkoord met de voorwaarden"
        name="consent"
        state={formState.consent}
        setState={handleFormChange}
      />

      <Button text="Verzend" type="submit"/>
    </form>
  </>);
}

export default App
