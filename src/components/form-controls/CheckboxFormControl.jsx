import './CheckboxFormControl.css';

function CheckboxFormControl({label, name, state, setState}) {
  return (<>
    <div className="form-control">
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={state}
        onChange={setState}/>
      <label htmlFor={name}>{label}</label>
    </div>
  </>);
}

export default CheckboxFormControl;