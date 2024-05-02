import type { Certification } from "./certificationSlice"
import "./CertificationCard.css"

export default function CertificationCard({
  certification,
}: {
  certification: Certification
}) {
  return (
    <div className="cert-card">
      <h3>{certification.title}</h3>
      <p className="date">{certification.issueDate}</p>
      <p className="issuer">{certification.issuer}</p>
      <img src={certification.image} alt={certification.title} />
    </div>
  )
}
