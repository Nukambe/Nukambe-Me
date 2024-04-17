import { createAsyncThunk } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import type { RootState } from "../../app/store"

enum LoadingStatus {
  loading,
  failed,
  success,
}

export type Certification = {
  id: number
  title: string
  issuer: string
  issueDate: string
  expirationDate: string
  image: string
}

export type CertificationState = {
  certifications: Certification[]
  status: LoadingStatus
}

const initialState: CertificationState = {
  certifications: [],
  status: LoadingStatus.loading,
}

export const getAllCertifications = createAsyncThunk(
  "certifications/getAll",
  async () => {
    const response = await fetch("/api/certifications")
    if (!response.ok) {
      throw new Error("Failed to fetch certifications")
    }
    const data = await response.json()
    console.log(data)
    return data as Certification[]
  },
)

export const certificationSlice = createAppSlice({
  name: "certifications",
  initialState,
  reducers: create => ({
    setCertifications: create.reducer(
      (state, action: PayloadAction<Certification[]>) => {
        state.certifications = action.payload
      },
    ),
  }),
  extraReducers: builder => {
    builder.addCase(
      getAllCertifications.fulfilled,
      (state, action: PayloadAction<Certification[]>) => {
        state.certifications = action.payload
        state.status = LoadingStatus.success
      },
    )
  },
})

export const { setCertifications } = certificationSlice.actions

export const selectCertifications = (state: RootState) =>
  state.certifications.certifications

export default certificationSlice.reducer
