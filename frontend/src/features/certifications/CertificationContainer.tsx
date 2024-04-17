import CertificationCard from "./CertificationCard"
import type { Certification } from "./certificationSlice"
import "./CertificationContainer.css"

export default function CertificationContainer({
  certifications,
}: {
  certifications: Certification[]
}) {
  return (
    <div className="cert-container">
      {certifications.map(certification => (
        <CertificationCard
          key={certification.id}
          certification={certification}
        />
      ))}
    </div>
  )
}
