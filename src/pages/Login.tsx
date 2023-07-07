/* eslint-disable react/jsx-curly-spacing */
import { useState, useEffect } from 'react';

function Login() {
  const [validateButton, setValidateButton] = useState(true);
  const [inputValue, setInputValue] = useState('');

  function validateLogin() {
    if (inputValue.length >= 3) {
      setValidateButton(false);
    } else {
      setValidateButton(true);
    }
  }
  useEffect(() => {
    validateLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);
  return (
    <div>
      <h1>ChapsTunes</h1>
      <form>
        <label>
          <input
            placeholder="Nome"
            value={inputValue}
            onChange={({ target }) => setInputValue(target.value)}
          />
        </label>
        <button
          disabled={validateButton}
        >
          Entrar

        </button>
      </form>
    </div>
  );
}

export default Login;
