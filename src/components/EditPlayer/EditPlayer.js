import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PlayerContext from "../../store/player-context";

import styles from "./EditPlayer.module.css";

const EditPlayer = () => {
  const ctx = useContext(PlayerContext);

  const params = useParams();
  const playerId = params.playerId;
  const playerIndex = ctx.players.findIndex(
    (player) => player.id === parseInt(playerId)
  );
  const player = ctx.players[playerIndex];

  const [enteredFirstName, setEnteredFirstName] = useState(player.firstName);
  const [enteredLastName, setEnteredLastName] = useState(player.lastName);
  const [enteredContactNumber, setEnteredContactNumber] = useState(
    player.contactNumber
  );

  let navigate = useNavigate();

  const [enteredSession, setEnteredSession] = useState(player.campaignName);


  const firstNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };
  const lastNameChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };
  const contactNumberChangeHandler = (event) => {
    setEnteredContactNumber(event.target.value);
  };
  const sessionChangeHandler = (event) => {
    setEnteredSession(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const updatedPlayer = {
      id: player.id,
      firstName: enteredFirstName,
      lastName: enteredLastName,
      contactNumber: enteredContactNumber,
      campaignName: enteredSession,
    };

    ctx.editPlayer(updatedPlayer);
     let path = `/player/${player.id}`
    navigate(path)
    
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        <div className={styles.firstNameContainer}>
          <label htmlFor="firstName" className={styles.firstNameLabel}>
            First Name{" "}
          </label>
          <input
            className={styles.firstNameInput}
            type="text"
            id="firstName"
            name="firstName"
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            required
          />
        </div>
        <div className={styles.lastNameContainer}>
          <label htmlFor="lastName" className={styles.lastNameLabel}>
            Last Name{" "}
          </label>
          <input
            className={styles.lastNameInput}
            type="text"
            id="lastName"
            name="lastName"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            required
          />
        </div>
        <div className={styles.sessionContainer}>
          <label className={styles.sessionlabel}>Session</label>
          <select   className={styles.sessionInput} value={enteredSession} onChange={sessionChangeHandler}>
            {/* <option value="All">All</option> */}
            <option value="Black Rain">Black Rain</option>
            <option value="One Last Riddle">One Last Riddle</option>
            <option value="The Burning Plague">The Burning Plague</option>
            <option value="The Sea Witch">The Sea Witch</option>
            <option value="Tomb of Horrors">Tomb of Horrors</option>
          </select>
        </div>
        <div className={styles.contactNumberContainer}>
          <label htmlFor="contactNumber" className={styles.contactNumberLabel}>
            Contact Number
          </label>
          <input
            className={styles.contactNumberInput}
            type="number"
            id="contactNumber"
            name="contactNumber"
            value={enteredContactNumber}
            onChange={contactNumberChangeHandler}
            required
          />
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.submitButton} type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPlayer;
