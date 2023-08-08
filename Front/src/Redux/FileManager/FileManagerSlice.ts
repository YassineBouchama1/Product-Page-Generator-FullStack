import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface initialStateType {
  Files: [];
  isloading: boolean;
}

const initialState: initialStateType = {
  Files: [],
  isloading: false,
};

export const FileManager = createSlice({
  name: "filesReducer",
  initialState,
  reducers: {
    setFiles: (state, action: PayloadAction<any>) => {
      state.Files = action.payload;
    },
  },
});

// // Action creators are generated for each case reducer function
export const { setFiles } = FileManager.actions;
export default FileManager.reducer;
