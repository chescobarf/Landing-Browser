import Background from "./components/Background/Background";
import Clock from "./components/Clock/Clock";
import Search from "./components/Search/Search";
import Container from "./layouts/Container/Container";
import FavoritesLayout from "./layouts/Favorites-Layout/FavoritesLayout";

function App() {
  return (
    <div className="App">
      <Background />
      <Container>
        <Clock />
        <Search />
        <FavoritesLayout></FavoritesLayout>
      </Container>
    </div>
  );
}

export default App;
