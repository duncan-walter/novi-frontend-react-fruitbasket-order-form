import './RadioButtonGroupFormControl.css';

function RadioButtonGroupFormControl({label, name, state, setState, options}) {
  function handleOnChange(e) {
    setState(e);
  }

  return (<>
    <div className="form-control">
      <fieldset>
        <legend>{label}</legend>
        {options.map(option => {
          return (
            <div key={option.id}>
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
            </div>
          )
        })}
      </fieldset>
    </div>
  </>);
}

export default RadioButtonGroupFormControl;