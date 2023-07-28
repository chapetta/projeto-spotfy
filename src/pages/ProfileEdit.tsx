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
  const [userImage, setUserImage] = useState('');
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
      && userImage.trim() !== ''
      && userDescription.trim() !== ''
      && isValidEmail(userEmail)
    );
  }

  async function handleButton() {
    await updateUser({
      name: userName,
      email: userEmail,
      image: userImage,
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
          <img src={user?.image} alt="imagem de perfil" />
          <label>
            <input
              type="text"
              onChange={({ target }) => setUserImage(target.value)}
              value={userImage}
            />
          </label>
          <p>{user?.name}</p>
          <label>
            <input
              type="text"
              onChange={({ target }) => setUserName(target.value)}
              value={userName}
            />
          </label>
          <p>{user?.email}</p>
          <label>
            <input
              type="text"
              onChange={({ target }) => setUserEmail(target.value)}
              value={userEmail}
            />
          </label>
          <p>{user?.description.length !== null ? user?.description : 'Description'}</p>
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
