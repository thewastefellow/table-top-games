import { useContext, useState } from "react";

import styles from "./PlayersList.module.css";
import PlayerContext from "../../store/player-context";
import PlayersCard from "../UI/PlayersCard";
import FilterPlayer from "../FilterPlayer";

const PlayersList = () => {
  const ctx = useContext(PlayerContext);

  const [filteredSession, setFilteredSession] = useState("All");

  const filterChangeHandler = (selectedSession) => {
    setFilteredSession(selectedSession);
  };

  const filteredPlayers = ctx.players.filter((player) => {
    if (filteredSession === "All") {
      return ctx.players;
    }
    return player.campaignName === filteredSession;
  });

  const isfilteredPlayerEmpty = Boolean(filteredPlayers.length);

  if (isfilteredPlayerEmpty) {
    return (
      <div className={styles.container}>
        <FilterPlayer onChangeFilter={filterChangeHandler} />
        <ul className={styles.list}>
          {filteredPlayers.map((player) => (
            <PlayersCard
              id={player.id}
              firstName={player.firstName}
              lastName={player.lastName}
              campaignName={player.campaignName}
              contactNumber={player.contactNumber}
              key={player.id}
            />
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <FilterPlayer onChangeFilter={filterChangeHandler} />
      <h2 className={styles.h2}> No records Found</h2>
    </div>
  );
};

export default PlayersList;
