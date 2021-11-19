import { Route, Routes } from "react-router-dom";

import AllMeetUpsPage from "./pages/AllMeetUps";
import NewMeetUpsPage from "./pages/NewMeetUp";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  /*
  React Router 6
  - path prop used to specify a url 
  - element prop used to specify the page component to be loaded
  */
  return (
    <Layout>
      <main>
        <Routes>
          <Route path="/" element={<AllMeetUpsPage />}></Route>
          <Route path="/new-meetup" element={<NewMeetUpsPage />}></Route>
          <Route path="/favorites" element={<FavoritesPage />}></Route>
        </Routes>
      </main>
    </Layout>
  );
}

export default App;
