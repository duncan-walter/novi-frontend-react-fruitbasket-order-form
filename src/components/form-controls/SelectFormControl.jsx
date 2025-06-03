import './TextFormControl.css';

function SelectFormControl({label, name, state, setState, options}) {
  return (<>
    <div className="form-control">
      <label htmlFor={name}>{label}:</label>
      <select
        name={name}
        id={name}
        value={state}
        onChange={setState}
      >
        {options.map(option => {
          return (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          )
        })}
      </select>
    </div>
  </>);
}

export default SelectFormControl;