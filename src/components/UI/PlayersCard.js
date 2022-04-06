import { click } from "@testing-library/user-event/dist/click";
import { Navigate, useLinkClickHandler, useNavigate } from "react-router-dom";
import styles from "./PlayersCard.module.css";

const PlayersCard = (props) => {
    const fullName = `${props.firstName} ${props.lastName}`

    let navigate = useNavigate();
    const clickHandler = () => {
     let path=`/player/${props.id}`
     navigate(path)
    }
  return (
    <div className={styles.container} onClick={clickHandler}>
      <div className={styles.fullName}>{fullName}</div>
      <div className={styles.CampaignName}>{props.campaignName}</div>
    </div>
  );
};

export default PlayersCard;