import NewMeetUpForm from "../components/meetups/NewMeetUpForm";

const NewMeetUpsPage = () => {
  const addMeetUpHander = (meetUpData) => {
    //firebase db url,
    //config object for post request - data should be in JSON format
    //JSON.stringify() to convert meetUpData to JSON format

    fetch(
      "https://react-demo-project-1-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetUpData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <section>
      <h1>Add New meetup</h1>
      <NewMeetUpForm onAddMeetUp={addMeetUpHander} />
    </section>
  );
};

export default NewMeetUpsPage;
