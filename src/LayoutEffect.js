import {useEffect, useLayoutEffect, useRef} from "react";

const LayoutEffect = () => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "Bruce";
  }, []);

  return(
    <div className={'mt-5 column is-6 is-offset-3'}>
      <input
        ref={inputRef}
        className={'input is-primary'}
        onChange={event => inputRef.current.value = event.target.value}
        type="text"/>
    </div>
  )
}

export default LayoutEffect;