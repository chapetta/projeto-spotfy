/* eslint-disable react/jsx-curly-spacing */
import { useState, useEffect } from 'react';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

interface Music {
  trackName: string;
  artworkUrl100: string;
  previewUrl: string;
  trackId: string;
}

interface MusicCardProps {
  musicInfo: Music;
  setLoading: (loading: boolean) => void;
}

function MusicCard({ musicInfo, setLoading }: MusicCardProps) {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const fetchFavoriteSongs = async () => {
      const favoriteSongs = await getFavoriteSongs();
      if (Array.isArray(favoriteSongs)) {
        const isFavorite = favoriteSongs
          .some((song: Music) => song.trackId === musicInfo.trackId);
        setFavorite(isFavorite);
      }
    };
    fetchFavoriteSongs();
  }, [musicInfo.trackId]);

  async function handleCheckBox() {
    try {
      setLoading(true);
      if (favorite) {
        await removeSong(musicInfo);
        setFavorite(false);
      } else {
        await addSong(musicInfo);
        setFavorite(true);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <div>
      <h3>{musicInfo.trackName}</h3>
      <img src={musicInfo.artworkUrl100} alt="Album Artwork" />
      <audio data-testid="audio-component" src={musicInfo.previewUrl} controls>
        <track kind="captions" />
        Your browser does not support the
        {' '}
        <code>audio</code>
        {' '}
        element.
      </audio>
      <input
        type="checkbox"
        onChange={handleCheckBox}
        checked={favorite}
      />
    </div>
  );
}

export default MusicCard;
