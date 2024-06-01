import { resumeTemplate } from "@/config/templates";
import { ResumeData } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  resume: ResumeData;
}

const initialState: InitialState = {
  resume: resumeTemplate,
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {},
});

export const {} = resumeSlice.actions;
export default resumeSlice.reducer;
