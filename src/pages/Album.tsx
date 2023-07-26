/* eslint-disable react/jsx-curly-spacing */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../componentes/Header';
import MusicCard from '../componentes/MusicCard';
import getMusics from '../services/musicsAPI';
import Loading from '../componentes/Loading';

function Album() {
  const { id } = useParams();
  const [albumInfos, setAlbumInfos] = useState([]);
  const [artistName, setArtistName] = useState('');
  const [albumName, setAlbumName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAlbumInfo() {
      try {
        if (id) {
          const response = await getMusics(id);
          setAlbumInfos(response.slice(1));
          setArtistName(response[0].artistName);
          setAlbumName(response[0].collectionName);
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
    <div>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h2 data-testid="artist-name">{artistName}</h2>
          <h3 data-testid="album-name">{albumName}</h3>
          {albumInfos.length > 0 ? (
            albumInfos.map((music) => (
              <div key={music.trackId}>
                <MusicCard
                  musicInfo={music}
                  setLoading={setLoading}
                />
              </div>
            ))
          ) : (
            <h3>No songs found for this album</h3>
          )}
        </div>
      )}
    </div>
  );
}

export default Album;
