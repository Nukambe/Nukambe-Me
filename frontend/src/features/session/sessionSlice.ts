import { createAsyncThunk } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"

enum LoadingStatus {
  loading,
  failed,
  success,
}

export type User = {
  id: number
  email: string
  createdAt: string
  updatedAt: string
}

export type SessionState = {
  user: User | null
  status: LoadingStatus
}

const initialState: SessionState = {
  user: null,
  status: LoadingStatus.loading,
}

export const login = createAsyncThunk(
  "session/login",
  async (credentials: { email: string; password: string }) => {
    const { email, password } = credentials
    const response = await fetch("/api/session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
    if (!response.ok) {
      throw new Error("Failed to login")
    }
    return (await response.json()) as User
  },
)

export const logout = createAsyncThunk("session/logout", async () => {
  const response = await fetch("/api/session", {
    method: "DELETE",
  })
  if (!response.ok) {
    throw new Error("Failed to logout")
  }
})

export const sessionSlice = createAppSlice({
  name: "session",
  initialState,
  reducers: create => ({
    setUser: create.reducer((state, action: PayloadAction<User>) => {
      state.user = action.payload
    }),
  }),
  extraReducers: builder => {
    builder.addCase(login.pending, state => {
      state.status = LoadingStatus.loading
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = LoadingStatus.success
      state.user = action.payload
    })
    builder.addCase(login.rejected, state => {
      state.status = LoadingStatus.failed
    })
    builder.addCase(logout.fulfilled, state => {
      state.status = LoadingStatus.loading
      state.user = null
    })
  },
})

export const { setUser } = sessionSlice.actions

export const selectUser = (state: { session: SessionState }) =>
  state.session.user

export default sessionSlice.reducer
