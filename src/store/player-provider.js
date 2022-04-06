import { useReducer } from "react";
import PlayerContext from "./player-context";

const dState = {
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
    {
      id: 3,
      firstName: "Tasha",
      lastName: "Jefferson",
      contactNumber: "07998987220",
      campaignName: "Black Rain",
    },
    {
      id: 4,
      firstName: "Gloria",
      lastName: "Mendoza",
      contactNumber: "07512645873",
      campaignName: "Black Rain",
    },
    {
      id: 5,
      firstName: "Theodore",
      lastName: "Bagwell",
      contactNumber: "07561384896",
      campaignName: "One Last Riddle",
    },
    {
      id: 6,
      firstName: "Brad",
      lastName: "Bellick",
      contactNumber: "07883256418",
      campaignName: "One Last Riddle",
    },
    {
      id: 7,
      firstName: "Lincoln",
      lastName: "Burrows",
      contactNumber: "07112356983",
      campaignName: "One Last Riddle",
    },
    {
      id: 8,
      firstName: "Fernando",
      lastName: "Sucre",
      contactNumber: "07963212321",
      campaignName: "One Last Riddle",
    },
    {
      id: 9,
      firstName: "Sara",
      lastName: "Tancredi",
      contactNumber: "07954186684",
      campaignName: "One Last Riddle",
    },
    {
      id: 10,
      firstName: "Daryl",
      lastName: "Dixon",
      contactNumber: "07325649845",
      campaignName: "The Burning Plague",
    },

    {
      id: 11,
      firstName: "Maggie",
      lastName: "Greene",
      contactNumber: "07459832185",
      campaignName: "The Burning Plague",
    },
    {
      id: 12,
      firstName: "Carol",
      lastName: "Peletier",
      contactNumber: "07124979566",
      campaignName: "The Burning Plague",
    },
    {
      id: 13,
      firstName: "Eugene",
      lastName: "Porter",
      contactNumber: "07223654987",
      campaignName: "The Burning Plague",
    },
    {
      id: 14,
      firstName: "Billy",
      lastName: "Cranston",
      contactNumber: "07985645784",
      campaignName: "The Sea Witch",
    },
    {
      id: 15,
      firstName: "Kimberly",
      lastName: "Hart",
      contactNumber: "07815307459",
      campaignName: "The Sea Witch",
    },
    {
      id: 16,
      firstName: "Trini",
      lastName: "Kwan",
      contactNumber: "07548755285",
      campaignName: "The Sea Witch",
    },
    {
      id: 17,
      firstName: "Tommy",
      lastName: "Oliver",
      contactNumber: "07989444568",
      campaignName: "The Sea Witch",
    },
    {
      id: 18,
      firstName: "Jason",
      lastName: "Scott",
      contactNumber: "07774854987",
      campaignName: "The Sea Witch",
    },
    {
      id: 19,
      firstName: "Zack",
      lastName: "Taylor",
      contactNumber: "07845222547",
      campaignName: "The Sea Witch",
    },
    {
      id: 20,
      firstName: "Joyce",
      lastName: "Byers",
      contactNumber: "07954668187",
      campaignName: "Tomb of Horrors",
    },
    {
      id: 21,
      firstName: "Dustin",
      lastName: "Henderson",
      contactNumber: "07889554857",
      campaignName: "Tomb of Horrors",
    },
    {
      id: 22,
      firstName: "Jim",
      lastName: "Hopper",
      contactNumber: "07954845148",
      campaignName: "Tomb of Horrors",
    },
    {
      id: 23,
      firstName: "Nancy",
      lastName: "Wheeler",
      contactNumber: "07445845711",
      campaignName: "Tomb of Horrors",
    },
  ],
};

const playerReducer = (state, action) => {
  if (action.type === "ADD") {
    return {
      ...state,
      players: [...state.players, action.player],
    };
  }
  if (action.type === "REMOVE") {
    console.log(action);
    const updatedPlayers = state.players.filter(
      (player) => player.id !== action.playerId
    );

    return {
      ...state,
      players: updatedPlayers,
    };
  }

  if (action.type === "EDIT") {
    console.log(action);
    const updatedPlayers = state.players.filter(
      (player) => player.id !== action.player.id
    );
    return {
      ...state,
      players: [...updatedPlayers, action.player],
    };
  }
  return dState;
};

const PlayerProvider = (props) => {
  const [playerState, dispatchPlayerAction] = useReducer(playerReducer, dState);
  const addPlayerHandler = (player) => {
    dispatchPlayerAction({ type: "ADD", player: player });
  };
  const removePlayerHandler = (playerId) => {
    dispatchPlayerAction({ type: "REMOVE", playerId: playerId });
  };

  const editPlayerHandler = (player) => {
    dispatchPlayerAction({ type: "EDIT", player: player });
  };
  const playerContext = {
    players: playerState.players,
    addPlayer: addPlayerHandler,
    removePlayer: removePlayerHandler,
    editPlayer: editPlayerHandler,
  };

  return (
    <PlayerContext.Provider value={playerContext}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
