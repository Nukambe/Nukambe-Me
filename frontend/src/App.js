import "./App.css";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import CertificationsPage from "./pages/Certifications";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ToolsPage from "./pages/ToolsPage";
import WorkPage from "./pages/WorkPage";

const Spacer = ({ height = 128 }) => <div style={{ height }} />;

const App = () => {
  document.title = "Wesley Chappell";

  return (
    <>
      <div className="content-container">
        <Navbar />
        <Spacer height={64} />
        <HomePage />
        <Spacer />
        <WorkPage />
        <Spacer />
        <CertificationsPage />
        <Spacer />
        <ToolsPage />
        <Spacer />
        <ContactPage />
      </div>
      <Footer />
    </>
  );
};

export default App;
