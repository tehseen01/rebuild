import DashboardTabs from '@/components/dashboard/Tabs';
import { Button } from '@/components/ui/button';

import React, { ReactNode } from 'react';

const AppLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="">
            <header className="flex items-center justify-between p-6">
                <div>
                    <span className="text-2xl font-bold text-orange-500">
                        RB
                    </span>
                </div>
                <div className="flex gap-4">
                    <Button variant={'outline'}>Sign in</Button>
                    <Button>Sign up</Button>
                </div>
            </header>
            <main className="px-6">
                <DashboardTabs />
                {children}
            </main>
        </div>
    );
};

export default AppLayout;
