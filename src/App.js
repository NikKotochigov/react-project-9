import { useState } from 'react';
import Shop from './Shop';

function App() {
  const [login, setLogin] = useState(false);

  if (login) {
    return (
      <>
        <Shop />
        <button className="btn" onClick={() => setLogin(false)}>
          Выйти
        </button>
      </>
    );
  } else {
    return (
      <>
        <h2>Нужно залогиниться!</h2>
        <button className="btn" onClick={() => setLogin(true)}>
          Войти
        </button>
      </>
    );
  }
}

export default App;
