import React from 'react';

const useOutsideClick = () => {
  const elmRef = React.useRef();
  const [state, setState] = React.useState(null);

  const onClick = (e) => {
    if(elmRef.current) {
      if(!elmRef.current.contains(e.target)) {
        setState(true);
        return
      }
      setState(false);
      return;
    }
  }

  React.useEffect(() => {
    window.addEventListener('click',onClick);
    return () => {
      window.removeEventListener('click',onClick);
    }
  })

  return {
    ref: elmRef,
    isOutside: state
  }
}

export default useOutsideClick;