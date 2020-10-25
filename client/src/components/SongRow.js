import React from 'react';

import './SongRow.css';

const SongRow = ({ track = {}, album = {} }) => {
  function convertMS(milliseconds) {
    var day, hour, minute, seconds;
    seconds = Math.floor(milliseconds / 1000);
    minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    day = Math.floor(hour / 24);
    hour = hour % 24;
    return {
      day: day,
      hour: hour,
      minute: minute,
      seconds: seconds,
    };
  }

  const time = convertMS(track.duration_ms);
  return (
    <div className="songRow">
      <div className="songRow__number">{track.track_number}</div>
      <img className="songRow__album" src={album.images[0].url} alt="" />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>{track.artists.map((artist) => artist.name).join(', ')}</p>
      </div>
      <div className="songRow__duration">
        {`${time.minute}:${time.seconds}`}
      </div>
    </div>
  );
};

export default SongRow;
