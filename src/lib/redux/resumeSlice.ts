import { resumeTemplate } from '@/config/templates';
import { PersonalDetails, ResumeData } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
    resume: ResumeData;
    personalDetails: PersonalDetails;
}

const initialState: InitialState = {
    resume: resumeTemplate,
    personalDetails: resumeTemplate.personalDetails,
};

const resumeSlice = createSlice({
    name: 'resume',
    initialState,
    reducers: {
        editPersonalDetails: (state, action) => {
            state.personalDetails = {
                ...state.personalDetails,
                ...action.payload,
            };
        },
    },
});

export const { editPersonalDetails } = resumeSlice.actions;
export default resumeSlice.reducer;
