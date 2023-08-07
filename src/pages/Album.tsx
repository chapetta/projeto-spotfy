/* eslint-disable react/jsx-curly-spacing */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../componentes/Header';
import MusicCard from '../componentes/MusicCard';
import getMusics from '../services/musicsAPI';
import Loading from '../componentes/Loading';
import '../Styles/Album.css';

function Album() {
  const { id } = useParams();
  const [albumInfos, setAlbumInfos] = useState([]);
  const [artistName, setArtistName] = useState('');
  const [albumName, setAlbumName] = useState('');
  const [imageAlbum, setImageAlbum] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAlbumInfo() {
      try {
        if (id) {
          const response = await getMusics(id);
          setAlbumInfos(response.slice(1));
          setArtistName(response[0].artistName);
          setAlbumName(response[0].collectionName);
          setImageAlbum(response[0].artworkUrl100);
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchAlbumInfo();
  }, [id]);

  return (
    <div className="album-page">
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <div className="centered-container">
          <div className="album-info">
            <img src={imageAlbum} alt="Album Cover" />
            <h2>{artistName}</h2>
            <h3>{albumName}</h3>
          </div>
          <div className="music-list">
            {albumInfos.length > 0 ? (
              albumInfos.map((music) => (
                <MusicCard
                  key={music.trackId}
                  musicInfo={music}
                  setLoading={setLoading}
                />
              ))
            ) : (
              <h3>No songs found for this album</h3>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Album;
