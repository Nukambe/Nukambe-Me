import "./App.css"
import Footer from "./features/footer/Footer"
import Navbar from "./features/navbar/Navbar"
import CertificationsPage from "./pages/Certifications"
import ContactPage from "./pages/ContactPage"
import HomePage from "./pages/HomePage"
import ToolsPage from "./pages/ToolsPage"
import WorkPage from "./pages/WorkPage"

const Spacer = ({ height = 128 }) => <div style={{ height }} />

const App = () => {
  return (
    <>
      <div style={{ width: "80%", margin: "auto" }}>
        <Navbar />
        <Spacer height={32} />
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
  )
}

export default App
