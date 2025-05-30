import './TextFormControl.css';

function TextFormControl({label, name, state, setState}) {
  function handleOnChange(e) {
    setState(e.target.value);
  }

  return (<>
    <div className="form-control">
      <label htmlFor={name}>{label}:</label>
      <input
        type="text"
        name={name}
        id={name}
        value={state}
        onChange={handleOnChange}/>
    </div>
  </>);
}

export default TextFormControl;