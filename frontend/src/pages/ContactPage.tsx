import ContactForm from "../features/contact/ContactForm"
import Socials from "../features/socials/Socials"
import PageContainer from "./PageContainer"

export default function ContactPage() {
  return (
    <PageContainer id="contact">
      <h2>Contact</h2>
      <Socials
        style={{ position: "static", justifyContent: "center", padding: 0 }}
      />
      <ContactForm />
    </PageContainer>
  )
}
