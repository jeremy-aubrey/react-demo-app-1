import NewMeetUpForm from "../components/meetups/NewMeetUpForm";

const NewMeetUpsPage = () => {
  const addMeetUpHander = (meetUpData) => {
    console.log(meetUpData);
  }
  
  return (
    <section>
      <h1>Add New meetup</h1>
      <NewMeetUpForm onAddMeetUp={addMeetUpHander}/>
    </section>
  );
};

export default NewMeetUpsPage;
