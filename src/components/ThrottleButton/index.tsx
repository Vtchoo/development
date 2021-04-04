// Author: https://github.com/EduardoWeschenfelder
// Source: https://github.com/EduardoWeschenfelder/EventManager/blob/main/pages/components/ThrottleButton.tsx

import { useState, useEffect } from "react"

export function ThrottleButton(throttleInMs: number) {
    
    const [nextClickTime, setNextClick] = useState(throttleInMs);
    const [enableToClick, setEnableToClick] = useState(true);

    useEffect(() => {
        if (!enableToClick) {
            const handler = setTimeout(() => {
                setNextClick(0);
                setEnableToClick(true);
            }, nextClickTime);
            return () => clearTimeout(handler);
        }
    }, [enableToClick]);

    const useThrottleButton = (exec: () => void) => {
        if (enableToClick) {
            exec();
            setEnableToClick(false);
            setNextClick(throttleInMs);
        }
    };

    return { useThrottleButton };
}