import './CheckboxFormControl.css';

function CheckboxFormControl({label, name, state, setState}) {
  function handleOnChange(e) {
    setState(e.target.checked);
  }

  return (<>
    <div>
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={state}
        onChange={handleOnChange}/>
      <label htmlFor={name}>{label}</label>
    </div>
  </>);
}

export default CheckboxFormControl;