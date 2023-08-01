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

  const handleSubmit = async (e: { preventDefault: () => void }) => {
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
      <div className="login-container">
        <div className="login-box">
          <h1 className="login-title">
            Chaps Tunes
            {' '}
            <i className="fas fa-headphones headphone-icon" />
          </h1>
          <form className="login-form" onSubmit={handleSubmit}>
            <label className="login-label">
              Nome:
              <input
                placeholder="Digite seu nome"
                value={inputValue}
                onChange={({ target }) => setInputValue(target.value)}
                className="login-input"
              />
            </label>
            <button disabled={validateButton} type="submit" className="login-button">
              Entrar
            </button>
          </form>
        </div>
      </div>
    )
  );
}

export default Login;
