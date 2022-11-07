import GlobalStyle from "./styles/GlobalStyles";
import Feed from "./components/Feed";
import Confirm from "./components/Confirm";
import Mapa from "./components/Mapa";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/presenca" element={<Confirm />} />
          <Route path="/mapa" element={<Mapa />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
