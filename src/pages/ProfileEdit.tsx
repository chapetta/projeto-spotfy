/* eslint-disable react/jsx-curly-spacing */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../componentes/Header';
import Loading from '../componentes/Loading';
import { getUser, updateUser } from '../services/userAPI';

interface User {
  name: string;
  image: string;
  email: string;
  description: string;
}

function ProfileEdit() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userImage, setUserImage] = useState<File | string>('');
  const [userDescription, setUserDescription] = useState('');
  const [validateButton, setValidateButton] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function getUserInfo() {
      setLoading(true);
      const response = await getUser();
      setUser(response as User);
      setLoading(false);
    }

    getUserInfo();
  }, []);

  function validateInputs() {
    return (
      userName.trim() !== ''
      && userEmail.trim() !== ''
      && userImage !== ''
      && userDescription.trim() !== ''
      && isValidEmail(userEmail)
    );
  }

  async function handleButton() {
    await updateUser({
      name: userName,
      email: userEmail,
      image: userImage instanceof File ? URL.createObjectURL(userImage) : userImage,
      description: userDescription,
    });
    navigate('/profile');
  }

  useEffect(() => {
    setValidateButton(!validateInputs());
  }, [userName, userEmail, userImage, userDescription]);

  function isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return (
    <div>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <form>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setUserImage(e.target.files?.[0] || '')}
          />
          {userImage instanceof File && (
            <img
              src={URL.createObjectURL(userImage)}
              alt="imagem de perfil"
              className="image-perfil"
            />
          )}

          <h3>Nome</h3>
          <label>
            <input
              type="text"
              onChange={({ target }) => setUserName(target.value)}
              value={userName}
            />
          </label>
          <h3>Email</h3>
          <label>
            <input
              type="text"
              onChange={({ target }) => setUserEmail(target.value)}
              value={userEmail}
            />
          </label>
          <h3>Descrição</h3>
          <label>
            <textarea
              rows={10}
              cols={40}
              onChange={({ target }) => setUserDescription(target.value)}
              value={userDescription}
            />
          </label>
          <button
            type="button"
            disabled={validateButton}
            onClick={handleButton}
          >
            Salvar
          </button>
        </form>
      )}
    </div>
  );
}

export default ProfileEdit;
