/* eslint-disable react/jsx-curly-spacing */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../componentes/Header';
import Loading from '../componentes/Loading';
import { getUser } from '../services/userAPI';

interface User {
  name: string;
  email: string;
  image: string;
  description: string;
}

function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getUserInfo() {
      setLoading(true);
      const response = await getUser();
      console.log(response);
      if (typeof response === 'object' && response !== null) {
        setUser(response as User);
      } else {
        setUser(null);
      }

      setLoading(false);
    }
    getUserInfo();
  }, []);
  return (
    <div>
      <Header />
      {loading ? <Loading /> : (
        <div>
          <img src={user?.image} alt="imagem de perfil" />
          <Link to="/profile/edit">
            <button>Editar Perfil</button>
          </Link>
          <p>{user?.name}</p>
          <p>{user?.email}</p>
          <p>{user?.description}</p>
        </div>)}

    </div>
  );
}

export default Profile;
