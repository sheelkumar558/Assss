import { Routes, Route } from "react-router-dom";
import { TalkPage } from "./components/TalkUs/TalkPage";
import { ThankPage } from "./components/ThankPage/ThankPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TalkPage />} />
      <Route path="/thankPage" element={<ThankPage />} />
    </Routes>
  );
}

export default App;
