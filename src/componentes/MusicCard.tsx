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
    </div>
  );
}

export default MusicCard;
