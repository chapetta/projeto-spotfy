/* eslint-disable react/jsx-curly-spacing */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import '../Styles/Header.css';
import perfil from '../utils/perfil.png';

function Header() {
  const [user, setUser] = useState<string>('');

  useEffect(() => {
    async function fetchUser() {
      try {
        const response: any = await getUser();
        const fetchedUser = response as { name: string };
        setUser(fetchedUser.name);
      } catch (error) {
        console.log('Não foi possível encontrar um usuário', error);
      }
    }
    fetchUser();
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <div className="logo-text">
            <i className="fas fa-headphones headphone-icon" />
            <span className="header-text-chaps">Chaps</span>
            <span className="header-text-tunes">Tunes</span>
          </div>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/search" className="nav-link">
                Pesquisa
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/favorites" className="nav-link">
                Favoritas
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                Perfil
              </Link>
            </li>
          </ul>
        </nav>
        <div className="user-info">
          <img
            src={perfil}
            alt="icone de perfil"
            className="image-perfil"
            width="30px"
          />
          <p className="user-name">{user}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
