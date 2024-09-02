'use client';

import { useState } from 'react';

const useCollapsible = () => {
    const [expend, setExpend] = useState<number[]>([]);

    const handleExpend = (idx: number) => {
        setExpend((prev) =>
            prev.includes(idx) ? prev.filter((p) => p !== idx) : [...prev, idx],
        );
    };

    return { expend, handleExpend } as const;
};

export default useCollapsible;
