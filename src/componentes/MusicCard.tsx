/* eslint-disable react/jsx-curly-spacing */
import { useState, useEffect } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import '../Styles/MusicCard.css';

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
        const isFavorite = favoriteSongs.some(
          (song: Music) => song.trackId === musicInfo.trackId,
        );
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
    <div className="music-card">
      <div className="music-image">
        <img src={musicInfo.artworkUrl100} alt="Album Artwork" />
      </div>
      <div className="music-info">
        <h3>{musicInfo.trackName}</h3>
      </div>
      <audio src={musicInfo.previewUrl} controls>
        <track kind="captions" srcLang="en" label="English captions" />
        Your browser does not support the
        {' '}
        <code>audio</code>
        {' '}
        element.
      </audio>
      <button onClick={handleCheckBox} className="favorite-button">
        {favorite ? (
          <MdFavorite color="red" size={20} />
        ) : (
          <MdFavoriteBorder color="black" size={20} />
        )}
      </button>
    </div>
  );
}

export default MusicCard;
