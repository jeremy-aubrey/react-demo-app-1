import Card from "../ui/Card";
import classes from "./NewMeetUpForm.module.css";

const NewMeetUpForm = () => {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" required></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input type="url" id="image" required></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" required></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5"></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetUpForm;
