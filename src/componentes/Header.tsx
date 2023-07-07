import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

function Header() {
  const [user, setUser] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response: any = await getUser();
        const fetchedUser = response as { name: string };
        setLoading(false);
        setUser(fetchedUser.name);
      } catch (error) {
        console.log('Não foi possível encontrar um usuário', error);
      }
    }
    fetchUser();
  }, []);

  return (
    <header>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <p>{user}</p>
          <nav>
            <ul>
              <li>
                <Link to="/search">
                  Pesquisa
                </Link>

              </li>
              <li>
                <Link to="/favorites">
                  {' '}
                  Favoritas
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  Perfil
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
