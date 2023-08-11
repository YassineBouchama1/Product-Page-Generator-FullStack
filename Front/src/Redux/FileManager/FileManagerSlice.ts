import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllFiles } from "./ActionsFileManager";

interface initialStateType {
  Files: any[]; // Replace 'any' with the actual type for files
  isloading: boolean;
}

const initialState: initialStateType = {
  Files: [],
  isloading: false,
};

export const FileManager = createSlice({
  name: "files",
  initialState,
  reducers: {
    setFiles: (state, action: PayloadAction<any[]>) => {
      state.Files = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllFiles.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(getAllFiles.fulfilled, (state, action) => {
      state.Files = action.payload;
      state.isloading = false;
    });
    builder.addCase(getAllFiles.rejected, (state) => {
      state.isloading = false;
    });
  },
});

export const { setFiles } = FileManager.actions;
export default FileManager.reducer;
