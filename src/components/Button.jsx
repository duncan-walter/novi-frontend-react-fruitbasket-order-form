import './Button.css';

// Ik weet niet of de default value nodig is, maar ik heb als default een lege functie aanroep neergezet.
function Button({text, type = "button", handleClick = () => {}}) {
  return (<>
    <button
      className="button-base"
      type={type}
      onClick={handleClick}
    >
      {text}
    </button>
  </>);
}

export default Button;