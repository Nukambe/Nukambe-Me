import { createAsyncThunk } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import type { RootState } from "../../app/store"

enum LoadingStatus {
  loading,
  failed,
  success,
}

export type Social = {
  id: number
  title: string
  link: string
  image: string
}

export type SocialState = {
  socials: Social[]
  status: LoadingStatus
}

const initialState: SocialState = {
  socials: [
    {
      id: 1,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/weschap/",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e8/Linkedin-logo-blue-In-square-40px.png",
    },
    {
      id: 2,
      title: "GitHub",
      link: "https://github.com/Nukambe",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
    },
    // {
    //   id: 3,
    //   title: "Email",
    //   link: "mailto:chappellwesley@gmail.com",
    //   image:
    //     "https://upload.wikimedia.org/wikipedia/commons/4/43/NotoSans_-_Back_Of_Envelope_-_1F582.svg",
    // },
  ],
  status: LoadingStatus.loading,
}

export const socialSlice = createAppSlice({
  name: "socials",
  initialState,
  reducers: create => ({
    setSocials: create.reducer((state, action: PayloadAction<Social[]>) => {
      state.socials = action.payload
    }),
  }),
})

export const { setSocials } = socialSlice.actions

export const selectSocials = (state: RootState) => state.socials.socials

export default socialSlice.reducer
