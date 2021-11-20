import { useState, useEffect } from "react";

import MeetUpList from "../components/meetups/MeetUpList";

const AllMeetUpsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [meetUps, setMeetUps] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    /*
      NOTE: Firebase will return an object with properties with nested objects
    */
    fetch(
      "https://react-demo-project-1-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //transform the data into an array that can be used by map
        const meetUpsArr = [];
        for (const key in data) {
          const meetUp = {
            id: key,
            ...data[key]
          }
          meetUpsArr.push(meetUp);
        }

        console.log(meetUpsArr);
        setIsLoading(false);
        setMeetUps(meetUpsArr);
      });
  }, []); //no external dependencies

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetUpList meetups={meetUps} />
    </section>
  );
};

export default AllMeetUpsPage;
