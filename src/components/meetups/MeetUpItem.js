import classes from "./MeetUpItem.module.css";

const MeetUpItem = (props) => {
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt=""></img>
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <button>Add to Favorites</button>
      </div>
    </li>
  );
};

export default MeetUpItem;
