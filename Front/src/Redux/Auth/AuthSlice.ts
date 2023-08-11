import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface initialStateType {
  Files: any[]; // Replace 'any' with the actual type for files
  isloading: boolean;
}

const initialState: initialStateType = {
  Files: [],
  isloading: false,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setFiles: (state, action: PayloadAction<any[]>) => {
      state.Files = action.payload;
    },
  },

});

export const { setFiles } = AuthSlice.actions;
export default AuthSlice.reducer;
