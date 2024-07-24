import { Plus } from 'lucide-react';
import React from 'react';

const page = () => {
    return (
        <div className="grid gap-8 py-4 sm:grid-cols-2 md:grid-cols-3 md:px-8 lg:grid-cols-4">
            <div className="flex h-[390px] items-center justify-center rounded-lg border border-orange-300 text-orange-600">
                <Plus /> <span>Create New Resume</span>
            </div>
        </div>
    );
};

export default page;
