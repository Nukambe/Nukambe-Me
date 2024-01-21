import { Routes, Route } from "react-router-dom";

import Landing from "./components/landing/Landing";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Landing} />
    </Routes>
  );
}

export default App;
