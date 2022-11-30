import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "./styles/GlobalComponents";
import MainSection from "./components/MainSection/MainSection";
import SearchFeed from "./components/SearchFeed/SearchFeed";
import LikedPhotos from "./components/LikedPhotos/LikedPhotos";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route exact path="/" element={<MainSection />} />
          <Route path="/search" element={<SearchFeed />} />
          <Route path="/likes" element={<LikedPhotos />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
