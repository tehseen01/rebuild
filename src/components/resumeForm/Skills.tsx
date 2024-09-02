'use client';

import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { ChevronDown, GripVertical, Plus, Trash } from 'lucide-react';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { cn } from '@/lib/utils';
import useCollapsible from '@/hooks/useCollapsible';
import {
    addNewSkillField,
    editSkill,
    removeSkill,
} from '@/lib/redux/resumeSlice';
import { ChangeEvent, useState } from 'react';

const Skills = () => {
    const [showExpLevel, setShowExpLevel] = useState(false);

    const { skills } = useAppSelector((state) => state.resume);

    const dispatch = useAppDispatch();
    const { expend, handleExpend } = useCollapsible();

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement>,
        id: string,
    ) => {
        const { name, value } = e.target;
        dispatch(editSkill({ [name]: value, id }));
    };

    const handleLevelChange = (val: string, id: string) => {
        dispatch(editSkill({ level: val, id }));
    };

    return (
        <section className="space-y-2 border-t-2 px-5 pt-4">
            <div>
                <h2 className="pb-4 text-xl font-bold text-orange-500">
                    Skills
                </h2>
                <div className="flex items-center space-x-2 py-3">
                    <Switch
                        id="show-level"
                        checked={showExpLevel}
                        onCheckedChange={(e) => setShowExpLevel(e)}
                    />
                    <Label htmlFor="show-level">
                        Don't show experience level
                    </Label>
                </div>
            </div>
            <div className="space-y-3">
                {skills.length > 0 &&
                    skills.map((skill, idx) => (
                        <div
                            key={skill.id}
                            className="space-y-2 rounded-md border p-2"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex gap-2">
                                    <Button
                                        size={'icon'}
                                        variant={'ghost'}
                                        radius={'full'}
                                        className="hover:bg-orange-100"
                                    >
                                        <GripVertical size={20} />
                                    </Button>
                                    <div className="">
                                        <p className="font-medium leading-none">
                                            {skill.label
                                                ? skill.label
                                                : 'Untitled'}
                                        </p>
                                        <span className="block text-sm">
                                            {skill.level}
                                        </span>
                                    </div>
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
                                            dispatch(removeSkill(skill.id))
                                        }
                                    >
                                        <Trash size={20} />
                                    </Button>
                                </div>
                            </div>
                            {expend.includes(idx) && (
                                <div className="flex items-center justify-between gap-4">
                                    <Label className="w-full space-y-1">
                                        <span className="pl-3">Skill</span>
                                        <Input
                                            placeholder="Skill"
                                            value={skill.label}
                                            onChange={(e) =>
                                                handleInputChange(e, skill.id)
                                            }
                                            name="label"
                                        />
                                    </Label>
                                    {!showExpLevel && (
                                        <Label className="w-full space-y-1">
                                            <p className="flex items-center justify-between">
                                                <span>Level</span>

                                                <span>{skill.level}</span>
                                            </p>
                                            <div className="flex items-center justify-between divide-x-2 divide-border overflow-hidden rounded-md border">
                                                {expertise.map((val, index) => {
                                                    const isActive =
                                                        expertise.indexOf(
                                                            skill.level,
                                                        ) >=
                                                        expertise.indexOf(val);
                                                    return (
                                                        <div
                                                            className={cn(
                                                                'size-full h-11 cursor-pointer',
                                                                isActive
                                                                    ? 'bg-[#3346D3]'
                                                                    : '',
                                                            )}
                                                            key={index}
                                                            onClick={() =>
                                                                handleLevelChange(
                                                                    val,
                                                                    skill.id,
                                                                )
                                                            }
                                                        >
                                                            <span className="hidden">
                                                                {val}
                                                            </span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </Label>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
            </div>
            <div className="py-2">
                <button
                    className="group flex items-center gap-2"
                    onClick={() => dispatch(addNewSkillField())}
                >
                    <span className="grid size-8 place-items-center rounded-full bg-orange-100 text-orange-500 group-hover:bg-orange-200">
                        <Plus />{' '}
                    </span>
                    <span className="text-orange-500">Add one more skill</span>
                </button>
            </div>
        </section>
    );
};

export default Skills;

const expertise = ['Beginner', 'Average', 'Skillful', 'Experienced', 'Expert'];
