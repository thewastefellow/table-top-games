import { useContext } from "react";
import PlayerContext from "../../store/player-context";
import styles from "./PlayerCard.module.css";
import { useNavigate, useParams } from "react-router-dom";

const PlayerCard = () => {
  const ctx = useContext(PlayerContext);

  const params = useParams();

  const playerId = params.playerId;

  const playerIndex = ctx.players.findIndex(
    (player) => player.id === parseInt(playerId)
  );

  const player = ctx.players[playerIndex];

  let navigate = useNavigate();

  const deleteClickHandler = () => {
    ctx.removePlayer(player.id);
    navigate("/");
  };

  const editClickHandler = () => {
    let path = `/editPlayer/${player.id}`;
    navigate(path);
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.firstName}>First Name : {player.firstName}</div>
        <div className={styles.lastName}>Last Name : {player.lastName}</div>
        <div className={styles.contactNumber}>
          Contact Number: {player.contactNumber}
        </div>
        <div className={styles.campaignName}>
          Session : {player.campaignName}
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.editButton} onClick={editClickHandler}>
          {" "}
          Edit
        </button>
        <button className={styles.deleteButton} onClick={deleteClickHandler}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;
