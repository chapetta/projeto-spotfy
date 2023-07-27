/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-curly-spacing */
import { useState, useEffect } from 'react';
import Header from '../componentes/Header';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import MusicCard from '../componentes/MusicCard';

interface Music {
  trackName: string;
  artworkUrl100: string;
  previewUrl: string;
  trackId: string;
}

function Favorites() {
  const [listFavorites, setlistFavorite] = useState<Music[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function favoriteSongs() {
      try {
        setLoading(true);
        const response = await getFavoriteSongs();
        setlistFavorite(response as Music[]);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    favoriteSongs();
  });

  async function handleRemove(trackId: string) {
    try {
      setLoading(true);
      await removeSong({ trackId });
      setlistFavorite((prevFavorite) => prevFavorite.filter((song) => {
        return song.trackId !== trackId;
      }));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  return (
    <div>
      <Header />
      <h2>Músicas Favoritas:</h2>
      {listFavorites.length > 0 && (
        listFavorites.map((song) => (
          <div key={song.trackId}>
            <MusicCard
              musicInfo={song}
              setLoading={setLoading}
              onRemove={handleRemove}
            />
          </div>
        ))
      )}
    </div>
  );
}

export default Favorites;
