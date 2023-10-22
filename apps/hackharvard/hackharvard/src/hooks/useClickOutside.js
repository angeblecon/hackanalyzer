import { useEffect, useCallback } from 'react';

/**
* Trigger function when a click is detected outside of an element
* @param {Object} ref Ref of the dropdown
* @param {Function} onChange Function to trigger on dropdown click
* @param {Object} ref Ref of the button
* @param {Function} onChange Function to trigger on button click
* @param {Object} ref Ref of the label
*/

const useClickOutside = ({ inside, onClickOutside, context }) => {

  const listener = useCallback(e => {
    if (onClickOutside && ((Array.isArray(inside) && !inside.find(i => i.current?.contains(e.target))) || (inside && !Array.isArray(inside) && !inside.current?.contains(e.target))) && (!context || context.current.contains(e.target))) {
      onClickOutside(e);
    }
  }, [inside, onClickOutside, context]);

  useEffect(() => {
    for (let e of ['mousedown', 'touchstart']) document.addEventListener(e, listener);
    return () => {
      for (let e of ['mousedown', 'touchstart']) document.removeEventListener(e, listener);
    };
  }, [listener]);

};

export default useClickOutside;
