import { useAppSelector } from "../app/hooks"
import CertificationContainer from "../features/certifications/CertificationContainer"
import {
  getAllCertifications,
  selectCertifications,
} from "../features/certifications/certificationSlice"

export const loader = (dispatch: any) => async () => {
  await dispatch(getAllCertifications())
  return null
}

export default function CertificationsPage() {
  const certifications = useAppSelector(selectCertifications)
  return (
    <div>
      <h1>Certifications</h1>
      <p>Welcome to the certifications page!</p>
      <CertificationContainer certifications={certifications} />
    </div>
  )
}
