import './Button.css';

// Ik weet niet of de default value nodig is, maar ik heb als default een lege functie aanroep neergezet.
function Button({text, type = "button", action = () => {}}) {
  return (<>
    <button
      className="button-base"
      type={type}
      onClick={action}
    >
      {text}
    </button>
  </>);
}

export default Button;