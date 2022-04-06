import React from "react";

const PlayerContext = React.createContext({
  players: [
    {
      id: 1,
      firstName: "Joe",
      lastName: "Caputo",
      contactNumber: "07658312387",
      campaignName: "Black Rain",
    },
    {
      id: 2,
      firstName: "Piper",
      lastName: "Chapman",
      contactNumber: "07142548798",
      campaignName: "Black Rain",
    },
  ],
  addPlayer: (player) => {},
  removePlayer: (id) => {},
  editPlayer: (player) => {}
});

export default PlayerContext;
