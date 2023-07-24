import { useState } from 'react';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

/* eslint-disable react/jsx-curly-spacing */
interface Music {
  trackName: string;
  artworkUrl100: string;
  previewUrl: string;
}

interface MusicCardProps {
  musicInfo: Music;
}

function MusicCard({ musicInfo }: MusicCardProps) {
  const [loading, setLoading] = useState(false);
  const [favorite, setFavorite] = useState(false);

  async function handleCheckBox() {
    try {
      setFavorite(true);
      setLoading(true);
      await addSong(musicInfo);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    loading ? <Loading /> : (
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
    )
  );
}

export default MusicCard;
