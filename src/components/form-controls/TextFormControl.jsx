import './TextFormControl.css';

function TextFormControl({label, name, state, setState}) {
  return (<>
    <div className="form-control">
      <label htmlFor={name}>{label}:</label>
      <input
        type="text"
        name={name}
        id={name}
        value={state}
        onChange={setState}/>
    </div>
  </>);
}

export default TextFormControl;