import cn from 'clsx';
import { useState } from 'react';

import viteLogo from '/vite.svg';
import css from '~/App.module.css';
import ReactLogo from '~/assets/react.svg?react';

export const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className={css.logo} alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <ReactLogo className={cn(css.logo, css.react)} />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={css.card}>
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={css.readTheDocs}>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};
