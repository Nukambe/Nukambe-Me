import certifications from "../app/certificationSlice";
import CertificationContainer from "../certifications/CertificationContainer";
import PageContainer from "./PageContainer";

export default function CertificationsPage() {
  return (
    <PageContainer id="certifications">
      <h2>Certifications</h2>
      <CertificationContainer certifications={certifications} />
    </PageContainer>
  );
}
