'use client';

import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

const DashboardTabs = () => {
    const [currentTab, setCurrentTab] = useState<'RESUME' | 'LETTER'>('RESUME');

    return (
        <section>
            <div>
                <h3 className="text-3xl font-bold tracking-tighter sm:text-[2.5rem]">
                    Welcome to ReBuild!
                </h3>
            </div>
            <div className="py-4">
                <div className="flex items-center justify-between pb-2">
                    <p className="text-xl font-semibold">Your documents</p>
                    <Button
                        variant={'outline'}
                        radius={'full'}
                        className="space-x-1"
                    >
                        <Plus size={20} /> <span>New</span>
                    </Button>
                </div>
                <div className="flex gap-4 border-b">
                    <button
                        onClick={() => setCurrentTab('RESUME')}
                        className={cn(
                            'border-b py-2',
                            currentTab === 'RESUME'
                                ? 'border-orange-500'
                                : 'border-transparent',
                        )}
                    >
                        <span className="">Resumes</span>
                    </button>
                    <button
                        onClick={() => setCurrentTab('LETTER')}
                        className={cn(
                            'border-b py-2',
                            currentTab === 'LETTER'
                                ? 'border-orange-500'
                                : 'border-transparent',
                        )}
                    >
                        <span className="">Cover letters</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DashboardTabs;
