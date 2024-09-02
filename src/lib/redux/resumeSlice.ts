import { resumeTemplate } from '@/config/templates';
import { Experience, PersonalDetails, ResumeData, Skill } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import { uniqueID } from '../utils';

interface InitialState {
    resume: ResumeData;
    personalDetails: PersonalDetails;
    workExperience: Experience[];
    skills: Skill[];
}

const initialState: InitialState = {
    resume: resumeTemplate,
    personalDetails: resumeTemplate.personalDetails,
    workExperience: resumeTemplate.experience || [],
    skills: resumeTemplate.skills || [],
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
                id: uniqueID(),
                bulletPoints: [],
                companyName: '',
                endDate: '',
                jobLocation: '',
                jobTitle: '',
                startDate: '',
            });
        },
        editWorkExperience: (state, action) => {
            const { id, ...rest } = action.payload;
            const findIndex = state.workExperience.findIndex(
                (x) => x.id === id,
            );
            if (findIndex !== -1) {
                state.workExperience[findIndex] = {
                    ...state.workExperience[findIndex],
                    ...rest,
                };
            }
        },
        deleteWorkExperience: (state, action) => {
            state.workExperience = state.workExperience.filter(
                (work) => work.id !== action.payload,
            );
        },
        addNewSkillField: (state) => {
            state.skills.push({
                id: uniqueID(),
                label: '',
                level: 'Expert',
            });
        },
        editSkill: (state, action) => {
            const findIndex = state.skills.findIndex(
                (skill) => skill.id === action.payload.id,
            );

            if (findIndex !== -1) {
                state.skills[findIndex] = {
                    ...state.skills[findIndex],
                    ...action.payload,
                };
            }
        },
        removeSkill: (state, action) => {
            state.skills = state.skills.filter(
                (skill) => skill.id !== action.payload,
            );
        },
    },
});

export const {
    editPersonalDetails,
    editWorkExperience,
    addWorkExperienceField,
    deleteWorkExperience,
    addNewSkillField,
    removeSkill,
    editSkill,
} = resumeSlice.actions;
export default resumeSlice.reducer;
