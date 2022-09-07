import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BudkaFooter from "./components/BudkaFooter";
import MyMain from "./components/MyMain";
import MyNav from "./components/MyNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyTvShows } from "./routes/MyTvShow";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <div>
        <MyNav />
        <Routes>
          <Route path="/" element={<MyMain />} />
          <Route path="/tv-show" element={<MyTvShows />} />
          <Route
            path="/detail/:movieId"
            element={<MovieDetails lol="ciao" />}
          />
        </Routes>
        <BudkaFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
