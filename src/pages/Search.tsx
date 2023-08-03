/* eslint-disable react/jsx-curly-spacing */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../componentes/Header';
import searchAlbumsAPI from '../services/searchAlbumnsAPI';
import Loading from '../componentes/Loading';
import '../Styles/Search.css';

interface Album {
  collectionId: string;
  collectionName: string;
  artistName: string;
  artworkUrl100: string;
}

function Search() {
  const [validateButton, setValidateButton] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [clickedButton, setClickedButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchedArtist, setSearchedArtist] = useState('');
  const [albums, setAlbums] = useState<Album[]>([]);

  function handleButton() {
    if (inputValue.length >= 2) {
      setValidateButton(false);
    } else {
      setValidateButton(true);
    }
  }

  async function searchArtist() {
    setLoading(true);

    try {
      const response = await searchAlbumsAPI(inputValue);
      setAlbums(response);
      setSearchedArtist(inputValue);
      setInputValue('');
      setLoading(false);
      setClickedButton(true);
    } catch (error) {
      console.log('nao foi possivel encontrar o artista');
      setLoading(false);
    }
  }

  useEffect(() => {
    handleButton();
  }, [inputValue]);

  return (
    <div className="search-page">
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <div>
          <form className="search-form">
            <label>
              <input
                value={inputValue}
                onChange={({ target }) => setInputValue(target.value)}
                placeholder="Nome do Artista"
                className="search-input"
              />
            </label>
            <button
              disabled={validateButton}
              onClick={searchArtist}
              className="search-button"
            >
              Pesquisar
            </button>
          </form>
          {clickedButton && (
            <div>
              {albums.length > 0 ? (
                <div>
                  <h2>{`Resultado de álbuns de: "${searchedArtist}"`}</h2>
                  <div className="albums-container">
                    {albums.map((album) => (
                      <div key={album.artistName} className="album-card">
                        <img src={album.artworkUrl100} alt="Capa do Album" />
                        <h2>{album.collectionName}</h2>
                        <h3>{album.artistName}</h3>
                        <Link to={`/album/${album.collectionId}`}>Saiba mais</Link>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <h2>Nenhum álbum foi encontrado</h2>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
