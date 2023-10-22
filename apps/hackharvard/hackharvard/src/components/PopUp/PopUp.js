import { useRef, useEffect, forwardRef, useState } from 'react';

import scss from './PopUp.scss';
import {
  useClickOutside
} from '@/hooks';

const c = strings => strings.filter(e => e).join(' ');

const PopUp = forwardRef(({ title, id, Icon, children, callback, fullScreen = false, gradient, className }, ref) => {
  const [expanded, setExpanded] = useState(false);
  const popUpContext = useRef();
  const popUpRef = useRef();
  const optionsRef = useRef();

  useClickOutside({
    inside: optionsRef,
    onClickOutside: () => setExpanded(false)
  });

  useClickOutside({
    inside: ref || popUpRef,
    onClickOutside: callback,
    context: popUpContext
  });

  useEffect(() => {
    document.activeElement.blur();
    document.documentElement.style.overflowY = 'hidden';
    return () => {
      if (document.getElementsByClassName('pop-up-container').length === 0) document.documentElement.style.overflowY = 'scroll';
    }
  }, []);

  return (
    <div id={id} className={c(['pop-up-container', fullScreen && 'full-screen', className])} ref={popUpContext}>
      <div id='pop-up' ref={ref || popUpRef}>
        <div id='pop-up-icons' ref={optionsRef} className={expanded ? 'expanded' : null}>
          {callback &&
            <svg height={20} alt='close' viewBox='0 0 365.696 365.696' onClick={callback}>
              <path
                d='m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0'
                fill='#DEDEDE'
              />
            </svg>
          }
        </div>
        <div id='pop-up-header' className={gradient ? 'gradient' : ''}>
          {Icon &&
            <Icon height={25} />
          }
          <h3>{title}</h3>
        </div>
        {children}
      </div>
      <style jsx>{scss}</style>
    </div>
  );
});

export default PopUp;
