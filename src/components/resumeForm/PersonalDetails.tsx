'use client';

import React, { ChangeEvent, useState } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { editPersonalDetails } from '@/lib/redux/resumeSlice';
import { Button } from '../ui/button';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const PersonalDetails = () => {
    const [showSocial, setShowSocial] = useState(false);

    const dispatch = useAppDispatch();
    const { personalDetails } = useAppSelector((state) => state.resume);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        dispatch(editPersonalDetails({ [name]: value }));
    };

    return (
        <section className="space-y-2 p-5 py-4">
            <h2 className="pb-4 text-xl font-bold text-orange-500">
                Personal details
            </h2>
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <Label className="w-full space-y-2">
                        <span>First Name</span>
                        <Input
                            placeholder="First name"
                            value={personalDetails.firstName}
                            onChange={handleInputChange}
                            name="firstName"
                        />
                    </Label>
                    <Label className="w-full space-y-2">
                        <span>Last Name</span>
                        <Input
                            placeholder="Last name"
                            name="lastName"
                            value={personalDetails.lastName}
                            onChange={handleInputChange}
                        />
                    </Label>
                </div>
                <Label className="space-y-2">
                    <span>Job Title</span>
                    <Input
                        type="text"
                        placeholder="Web Developer"
                        name="title"
                        value={personalDetails.title}
                        onChange={handleInputChange}
                    />
                </Label>
                <div className="flex items-center gap-4">
                    <Label className="flex-1 space-y-2">
                        <span>Email</span>
                        <Input
                            type="email"
                            placeholder="name@example.com"
                            name="email"
                            value={personalDetails.email}
                            onChange={handleInputChange}
                        />
                    </Label>
                    <Label className="flex-1 space-y-2">
                        <span>Phone number</span>
                        <Input
                            type="text"
                            placeholder="+919876543210"
                            name="phone"
                            value={personalDetails.phone}
                            onChange={handleInputChange}
                        />
                    </Label>
                </div>
                <Label className="space-y-2">
                    <span>Address</span>
                    <Input
                        type="text"
                        placeholder="Address"
                        name="address"
                        value={personalDetails.address}
                        onChange={handleInputChange}
                    />
                </Label>
                <div>
                    <Button
                        variant={'link'}
                        className="space-x-2 px-0 text-orange-500"
                        onClick={() => setShowSocial(!showSocial)}
                    >
                        <span className="text-md font-semibold tracking-wide">
                            Add social link
                        </span>
                        <ChevronDown
                            size={20}
                            className={cn(
                                'transition-transform',
                                showSocial ? 'rotate-180' : 'rotate-0',
                            )}
                        />
                    </Button>
                    <div
                        className={cn(
                            'space-y-2 overflow-hidden transition-transform',
                            showSocial ? 'h-full' : 'h-0',
                        )}
                    >
                        <div className="flex items-center gap-4">
                            <Label className="w-full space-y-2">
                                <span>Website</span>
                                <Input
                                    placeholder="https://yourwebsite.com"
                                    onChange={handleInputChange}
                                    value={personalDetails.website}
                                    name="website"
                                />
                            </Label>
                            <Label className="w-full space-y-2">
                                <span>LinkedIn</span>
                                <Input
                                    placeholder="https://linkedin.com/name"
                                    name="linkedin"
                                    value={personalDetails.linkedin}
                                    onChange={handleInputChange}
                                />
                            </Label>
                        </div>
                        <div className="flex items-center gap-4">
                            <Label className="w-full space-y-2">
                                <span>Twitter</span>
                                <Input
                                    placeholder="https://twitter.com/name"
                                    value={personalDetails.twitter}
                                    onChange={handleInputChange}
                                    name="twitter"
                                />
                            </Label>
                            <Label className="w-full space-y-2">
                                <span>GitHub</span>
                                <Input
                                    placeholder="https://github.com/name"
                                    name="github"
                                    value={personalDetails.github}
                                    onChange={handleInputChange}
                                />
                            </Label>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PersonalDetails;
