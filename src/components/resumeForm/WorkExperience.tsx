'use client';

import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';
import { Button } from '../ui/button';
import { ChevronDown, GripVertical, Plus, Trash } from 'lucide-react';
import { ChangeEvent, useState } from 'react';
import { cn } from '@/lib/utils';
import {
    addWorkExperienceField,
    deleteWorkExperience,
    editWorkExperience,
} from '@/lib/redux/resumeSlice';
import { Textarea } from '../ui/textarea';
import useCollapsible from '@/hooks/useCollapsible';

const WorkExperience = () => {
    const dispatch = useAppDispatch();
    const { workExperience } = useAppSelector((state) => state.resume);

    const { expend, handleExpend } = useCollapsible();

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement>,
        id: string,
    ) => {
        const { name, value } = e.target;
        dispatch(editWorkExperience({ [name]: value, id }));
    };

    return (
        <section className="space-y-2 border-t-2 px-5 pt-4">
            <div>
                <h2 className="pb-4 text-xl font-bold text-orange-500">
                    Work Experience
                </h2>
            </div>
            <div className="space-y-3">
                {workExperience.map((exp, idx) => (
                    <div key={idx} className="space-y-2 rounded-md border p-2">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Button
                                    size={'icon'}
                                    variant={'ghost'}
                                    className="hover:bg-orange-100"
                                >
                                    <GripVertical size={20} />
                                </Button>
                                <p className="text-lg font-semibold">
                                    {exp.jobTitle}
                                </p>
                            </div>
                            <div>
                                <Button
                                    className="hover:bg-orange-100"
                                    size={'icon'}
                                    variant={'ghost'}
                                    radius={'full'}
                                    onClick={() => handleExpend(idx)}
                                >
                                    <ChevronDown
                                        size={20}
                                        className={cn(
                                            'transition-transform',
                                            expend.includes(idx)
                                                ? 'rotate-180'
                                                : '',
                                        )}
                                    />
                                </Button>
                                <Button
                                    className="hover:bg-orange-100"
                                    size={'icon'}
                                    variant={'ghost'}
                                    radius={'full'}
                                    onClick={() =>
                                        dispatch(deleteWorkExperience(exp.id))
                                    }
                                >
                                    <Trash size={20} />
                                </Button>
                            </div>
                        </div>
                        {expend.includes(idx) && (
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <Label className="w-full space-y-2">
                                        <span>Job Title</span>
                                        <Input
                                            placeholder="Software developer"
                                            value={exp.jobTitle}
                                            onChange={(e) =>
                                                handleInputChange(e, exp.id)
                                            }
                                            name="jobTitle"
                                        />
                                    </Label>
                                    <Label className="w-full space-y-2">
                                        <span>Company Name</span>
                                        <Input
                                            placeholder="Google"
                                            name="companyName"
                                            value={exp.companyName}
                                            onChange={(e) =>
                                                handleInputChange(e, exp.id)
                                            }
                                        />
                                    </Label>
                                </div>
                                <Label className="flex flex-1 flex-col space-y-2">
                                    <span>Location</span>
                                    <Input
                                        placeholder="New delhi"
                                        name="jobLocation"
                                        value={exp.jobLocation}
                                        onChange={(e) =>
                                            handleInputChange(e, exp.id)
                                        }
                                    />
                                </Label>
                                <div className="flex gap-4">
                                    <Label className="flex-1 space-y-2">
                                        <span>Start Date</span>
                                        <Input
                                            type="month"
                                            name="startDate"
                                            value={exp.startDate}
                                            onChange={(e) =>
                                                handleInputChange(e, exp.id)
                                            }
                                        />
                                    </Label>
                                    <div className="flex flex-1 flex-col gap-3">
                                        <Label className="flex-1 space-y-2">
                                            <span>End Date</span>
                                            {exp.endDate === 'Present' ? (
                                                <Input
                                                    type="text"
                                                    readOnly
                                                    value={exp.endDate}
                                                />
                                            ) : (
                                                <Input
                                                    className=""
                                                    type="month"
                                                    name="endDate"
                                                    value={exp.endDate}
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            e,
                                                            exp.id,
                                                        )
                                                    }
                                                />
                                            )}
                                        </Label>
                                        <Label className="flex cursor-pointer items-center gap-3">
                                            <Checkbox
                                                onCheckedChange={(checked) =>
                                                    dispatch(
                                                        editWorkExperience({
                                                            endDate: checked
                                                                ? 'Present'
                                                                : '',
                                                            id: exp.id,
                                                        }),
                                                    )
                                                }
                                                checked={
                                                    exp.endDate === 'Present'
                                                }
                                            />{' '}
                                            <span>Currently work here</span>
                                        </Label>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-medium">Summery</p>
                                    <div className="mt-2 rounded-md border">
                                        <div className="h-10 border-b"></div>
                                        <Textarea
                                            rows={10}
                                            placeholder="Enter your summery"
                                            className="h-auto resize-none border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="py-2">
                <button
                    className="group flex items-center gap-2"
                    onClick={() => dispatch(addWorkExperienceField())}
                >
                    <span className="grid size-8 place-items-center rounded-full bg-orange-100 text-orange-500 group-hover:bg-orange-200">
                        <Plus />{' '}
                    </span>
                    <span className="text-orange-500">Add work experience</span>
                </button>
            </div>
        </section>
    );
};

export default WorkExperience;
