import { resumeTemplate } from '@/config/templates';
import { Experience, PersonalDetails, ResumeData } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
    resume: ResumeData;
    personalDetails: PersonalDetails;
    workExperience: Experience[];
}

const initialState: InitialState = {
    resume: resumeTemplate,
    personalDetails: resumeTemplate.personalDetails,
    workExperience: resumeTemplate.experience || [],
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
        addWorkExperienceField: (state) => {
            state.workExperience.push({
                id: '1',
                bulletPoints: [],
                companyName: '',
                endDate: '',
                jobLocation: '',
                jobTitle: '',
                startDate: '',
            });
        },
        editWorkExperience: (state, action) => {
            state.workExperience = action.payload;
        },
        deleteWorkExperience: (state, action) => {},
    },
});

export const {
    editPersonalDetails,
    editWorkExperience,
    addWorkExperienceField,
} = resumeSlice.actions;
export default resumeSlice.reducer;
