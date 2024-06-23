'use client';

import React, { ChangeEvent, useState } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { useAppDispatch } from '@/lib/redux/hooks';
import { editPersonalDetails } from '@/lib/redux/resumeSlice';
import { Button } from '../ui/button';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const PersonalDetails = () => {
    const [showSocial, setShowSocial] = useState(false);

    const dispatch = useAppDispatch();

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        dispatch(editPersonalDetails({ [name]: value }));
    };

    return (
        <div className="space-y-2 p-4">
            <div>
                <h2 className="pb-4 text-xl font-bold text-orange-500">
                    Personal details
                </h2>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-full space-y-2">
                    <Label>First Name</Label>
                    <Input
                        placeholder="First name"
                        onChange={handleInputChange}
                        name="firstName"
                    />
                </div>
                <div className="w-full space-y-2">
                    <Label>Last Name</Label>
                    <Input
                        placeholder="Last name"
                        name="lastName"
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="space-y-2">
                <Label>Job Title</Label>
                <Input
                    type="text"
                    placeholder="Web Developer"
                    name="title"
                    onChange={handleInputChange}
                />
            </div>
            <div className="space-y-2">
                <Label>Email</Label>
                <Input
                    type="email"
                    placeholder="name@example.com"
                    name="email"
                    onChange={handleInputChange}
                />
            </div>
            <div className="space-y-2">
                <Label>Phone number</Label>
                <Input
                    type="text"
                    placeholder="+919876543210"
                    name="phone"
                    onChange={handleInputChange}
                />
            </div>
            <div className="space-y-2">
                <label>Address</label>
                <Input
                    type="text"
                    placeholder="Address"
                    name="address"
                    onChange={handleInputChange}
                />
            </div>
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
                        'overflow-hidden transition-transform',
                        showSocial ? 'h-full' : 'h-0',
                    )}
                >
                    <div className="flex items-center gap-2">
                        <div className="w-full space-y-2">
                            <Label>Website</Label>
                            <Input
                                placeholder="https://yourwebsite.com"
                                onChange={handleInputChange}
                                name="firstName"
                            />
                        </div>
                        <div className="w-full space-y-2">
                            <Label>LinkedIn</Label>
                            <Input
                                placeholder="https://github.com/name"
                                name="lastName"
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-full space-y-2">
                            <Label>Linkedin</Label>
                            <Input
                                placeholder="https://linkedin.com/in/name"
                                onChange={handleInputChange}
                                name="firstName"
                            />
                        </div>
                        <div className="w-full space-y-2">
                            <Label>GitHub</Label>
                            <Input
                                placeholder="https://github.com/name"
                                name="lastName"
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalDetails;
