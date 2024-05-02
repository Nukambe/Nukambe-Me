import { useAppSelector } from "../app/hooks"
import CertificationContainer from "../features/certifications/CertificationContainer"
import { selectCertifications } from "../features/certifications/certificationSlice"
import PageContainer from "./PageContainer"

export default function CertificationsPage() {
  const certifications = useAppSelector(selectCertifications)
  return (
    <PageContainer id="certifications">
      <h2>Certifications</h2>
      <CertificationContainer certifications={certifications} />
    </PageContainer>
  )
}
