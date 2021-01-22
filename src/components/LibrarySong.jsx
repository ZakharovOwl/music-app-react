import React from "react";
import { playAudio } from "../util";


const LibrarySong = ({
  song,
  setCurrentSong,
  songs,
  audioRef,
  isPlaying,
  setSongs,
  id,
}) => {
  const songSelectHandker = () => {
    const selectedSong = songs.filter((state) => state.id === song.id);
    setCurrentSong(selectedSong[0]);
    // add Active state
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return { ...song, active: false, };
      }
    });
    setSongs(newSongs);
     //check if the song is plaing
    playAudio(isPlaying, audioRef)
  };

  return (
    <div
      onClick={songSelectHandker}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-decription">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
