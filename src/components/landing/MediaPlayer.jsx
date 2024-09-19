import "react-h5-audio-player/lib/styles.css";
import AudioPlayer from "react-h5-audio-player";

const MediaPlayer = () => {
  console.log("MediaPlayer component loaded");
  return (
    <AudioPlayer
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      onPlay={() => console.log("Playing audio")}
      // Additional player options can go here
    />
  );
};

export default MediaPlayer;
