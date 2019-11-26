import React from "react";
import Time from "react-time";

export default function Match({ date, playlist, kills, matchCount }) {
  return (
    <div>
      <h3>
        <Time value={date} format="MM/DD/YYYY HH:mm" />
      </h3>
      <div className="playlist">
        <span>Playlist: </span>
        {playlist}
      </div>
      <div className="kills">
        <span>Kills: </span>
        {kills}
      </div>
      <div className="matchCount">
        <span>Matches: </span>
        {matchCount}
      </div>
      <hr />
    </div>
  );
}
