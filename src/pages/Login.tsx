/* eslint-disable react/jsx-curly-spacing */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../componentes/Loading';

function Login() {
  const [validateButton, setValidateButton] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createUser({ name: inputValue });
      setLoading(false);
      navigate('/search');
    } catch (error) {
      console.log('Error creating user:', error);
      setLoading(false);
    }
  };

  return (
    loading ? <Loading /> : (
      <div>
        <h1>ChapsTunes</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              placeholder="Nome"
              value={inputValue}
              onChange={({ target }) => setInputValue(target.value)}
            />
          </label>
          <button disabled={validateButton} type="submit">
            Entrar
          </button>
        </form>
      </div>
    )
  );
}

export default Login;
