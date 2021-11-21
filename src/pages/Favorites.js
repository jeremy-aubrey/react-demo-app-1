import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import MeetUpList from "../components/meetups/MeetUpList";

const FavoritesPage = () => {
  /*
  Note: Since the favorites context exists only in memory
  the content will be lost on refresh. For peristance, 
  adding a favorite would need POST to a server which we could 
  make a GET request to here. (Like in all meetups)
  */
  const favoriteCtx = useContext(FavoritesContext);

  let content;
  if (favoriteCtx.totalFavorites === 0) {
    content = <p>You have no favorites yet. Why don't you add some?</p>;
  } else {
    content = <MeetUpList meetups={favoriteCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
};

export default FavoritesPage;
