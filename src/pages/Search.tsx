/* eslint-disable react/jsx-curly-spacing */
import { useState, useEffect } from 'react';
import Header from '../componentes/Header';

function Search() {
  const [validateButton, setValidateButton] = useState(true);
  const [inputValue, setInputValue] = useState('');

  function handleButton() {
    if (inputValue.length >= 2) {
      setValidateButton(false);
    } else {
      setValidateButton(true);
    }
  }

  useEffect(() => {
    handleButton();
  }, [inputValue]);

  return (
    <div>
      <Header />
      <form>
        <label>
          <input
            value={inputValue}
            onChange={({ target }) => setInputValue(target.value)}
            placeholder="Nome do Artista"
          />
        </label>
        <button
          // eslint-disable-next-line react/jsx-curly-spacing
          disabled={validateButton}
        >
          Pesquisar

        </button>
      </form>
    </div>
  );
}

export default Search;
