import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import PlayerContext from "../../store/player-context";

import styles from "./CreatePlayer.module.css";

const CreatePlayer = () => {
  const ctx = useContext(PlayerContext);

  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredContactNumber, setEnteredContactNumber] = useState("");
  const [enteredSession, setEnteredSession] = useState("");

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
  let navigate = useNavigate();
 const submitHandler = (event) => {
    event.preventDefault();

    const player = {
      id: Math.floor(Math.random() * 100000),
      firstName: enteredFirstName,
      lastName: enteredLastName,
      contactNumber: enteredContactNumber,
      campaignName: enteredSession,
    };

    ctx.addPlayer(player);

    setEnteredFirstName("");
    setEnteredLastName("");
    setEnteredContactNumber("");
    setEnteredSession("");

    navigate("/")
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
              placeholder="  Enter Player's First Name Please"
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
              placeholder="  Enter Player's Last Name Please"
              value={enteredLastName}
              onChange={lastNameChangeHandler}
              required
            />
          </div>
          {/* <div className={styles.sessionContainer}>
          <label htmlFor="session" className={styles.sessionLabel}>
            Session
          </label>
          <input
            className={styles.sessionInput}
            type="text"
            id="session"
            name="session"
            placeholder="Select Player's session Please"
            value={enteredSession}
            onChange={SessionChangeHandler}
            required
          />
        </div> */}

          <div className={styles.sessionContainer}>
            <label className={styles.sessionlabel}>Session</label>
            <select className={styles.sessionInput} value={enteredSession} onChange={sessionChangeHandler}>
              {/* <option value="All">All</option> */}
              <option value="Black Rain">  Black Rain</option>
              <option value="One Last Riddle">  One Last Riddle</option>
              <option value="The Burning Plague">  The Burning Plague</option>
              <option value="The Sea Witch">  The Sea Witch</option>
              <option value="Tomb of Horrors">  Tomb of Horrors</option>
            </select>
          </div>

          <div className={styles.contactNumberContainer}>
            <label
              htmlFor="contactNumber"
              className={styles.contactNumberLabel}
            >
              Contact Number
            </label>
            <input
              className={styles.contactNumberInput}
              type="number"
              id="contactNumber"
              name="contactNumber"
              placeholder="  Enter Player's Contact Number Please"
              value={enteredContactNumber}
              onChange={contactNumberChangeHandler}
              required
            />
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.submitButton} type="submit">
              Create Player
            </button>
          </div>
        </form>
      </div>
    
  );
};

export default CreatePlayer;
