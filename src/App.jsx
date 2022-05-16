import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { AppContainer } from "./AppStyles.js";
import { SectionStatistics } from "./components/SectionStatistics";
import { Background } from "./components/Background";
import { SectionPopulars } from "./components/SectionPopulars";
import { SectionArtists } from "./components/SectionArtists";
import { Footer } from "./components/Footer";

function App() {
  return (
    <AppContainer>
      <Background />
      <Header />
      <Main />
      <SectionStatistics />
      <SectionPopulars />
      <SectionArtists />
      <Footer />
    </AppContainer>
  );
}

export default App;
