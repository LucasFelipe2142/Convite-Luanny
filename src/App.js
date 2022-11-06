import GlobalStyle from "./styles/GlobalStyles";
import Feed from "./components/Feed";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Feed />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
