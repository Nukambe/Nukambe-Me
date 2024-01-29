// import { Routes, Route } from "react-router-dom";

import Landing from "./components/landing/Landing";
import Work from "./components/work/Work";
import Skills from "./components/skills/Skills";
import Socials from "./components/socials/Socials";
import Footer from "./components/footer/Footer";

import "./App.css";

// function PageDivider() {
//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100px",
//       }}
//     ></div>
//   );
// }

function App() {
  return (
    <>
      <Socials />
      <Landing />
      {/* <PageDivider /> */}
      <Work />
      {/* <PageDivider /> */}
      <Skills />
      <Footer />
    </>
  );
}

export default App;
