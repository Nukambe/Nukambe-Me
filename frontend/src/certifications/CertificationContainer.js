import CertificationCard from "./CertificationCard";
import "./CertificationContainer.css";

export default function CertificationContainer({ certifications }) {
  return (
    <div className="cert-container">
      {certifications
        .slice()
        .reverse()
        .map((certification) => (
          <CertificationCard
            key={certification.id}
            certification={certification}
          />
        ))}
    </div>
  );
}
