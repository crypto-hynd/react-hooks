import {forwardRef, useEffect} from "react";

const Input = forwardRef((
  {label, color, value, type, size, placeholder, isError, onChange, ...props}, ref) => {
  useEffect(() => {
    ref.current.focus();
  }, [ref]);

  return(
    <div className={'field is-inline-flex is-align-items-baseline'}>
      <label className={'label is-inline mr-4'}>{label}:</label>
      <input
        ref={ref}
        value={value}
        className={`input ${color} ${size} ${isError && 'is-danger'}`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
    </div>
  );
});

export default Input;
