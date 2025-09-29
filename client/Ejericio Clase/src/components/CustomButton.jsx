import './CustomButton.css';

function CustomButton({ btnText, variant, size, disabled, onClick }) {
  const classes = `btn btn-${variant} btn-${size} ${disabled ? 'disabled' : ''}`;
  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      {btnText}
    </button>
  );
}

export default CustomButton;