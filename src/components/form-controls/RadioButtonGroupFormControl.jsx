import React from 'react';
import './RadioButtonGroupFormControl.css';

function RadioButtonGroupFormControl({label, name, state, setState, options}) {
  function handleOnChange(e) {
    setState(e.target.value);
  }

  return (<>
    <div>
      <fieldset>
        <legend>{label}</legend>
        {options.map(option => {
          // Ik kon het key attribuut niet op een normaal fragment (<></>) plaatsen dus had ik opgezocht hoe het dan moest:
          return (<React.Fragment key={option.id}>
            <label htmlFor={option.id}>{option.label}</label>
            <input
              key={option.id}
              type="radio"
              name={name}
              id={option.id}
              value={option.value}
              checked={state === option.value}
              onChange={handleOnChange}
            />
          </React.Fragment>)
        })}
      </fieldset>
    </div>
  </>);
}

export default RadioButtonGroupFormControl;