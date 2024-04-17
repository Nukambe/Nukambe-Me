import type { Certification } from "./certificationSlice"
import "./CertificationCard.css"

export default function CertificationCard({
  certification,
}: {
  certification: Certification
}) {
  return (
    <div className="cert-card">
      <h2>{certification.title}</h2>
      <span className="issuer">{certification.issuer}</span>
      <span className="date">{certification.issueDate}</span>
      <span className="date">{certification.expirationDate}</span>
      <img src={certification.image} alt={certification.title} />
    </div>
  )
}
