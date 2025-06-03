import './TextareaFormControl.css';

function TextareaFormControl({label, name, state, setState}) {
  return (<>
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <textarea
        name={name}
        id={name}
        cols="30"
        rows="10"
        value={state}
        onChange={setState}>
      </textarea>
    </div>
  </>);
}

export default TextareaFormControl;