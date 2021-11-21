import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (favoriteMeetUp) => {
    setUserFavorites((prevState) => {
      return prevState.concat(favoriteMeetUp);
    });
  };

  const removeFavoriteHander = (meetUpId) => {
      setUserFavorites((prevState) => {
          return prevState.filter(meetUp => meetUp.id !== meetUpId);
      })
  };

  const itemIsFavtoriteHandler = (meetUpId) => {
      return userFavorites.some(meetUp => meetUp.id === meetUpId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavore: removeFavoriteHander,
    itemIsFavtorite: itemIsFavtoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};
