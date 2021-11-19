import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header>
      <div>Meetups</div>
      <nav>
        <ul>
          <NavLink to="/">All Meetups</NavLink>
          <NavLink to="/new-meetup">New Meetup</NavLink>
          <NavLink to="/favorites">My Favorites</NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
