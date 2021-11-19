import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header>
      <div>Meetups</div>
      <nav>
        <ul>
          <Link to="/">All Meetups</Link>
          <Link to="/new-meetup">New Meetup</Link>
          <Link to="/favorites">My Favorites</Link>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
