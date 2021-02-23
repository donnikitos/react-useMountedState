import { useEffect, useRef, useState as ReactUseState } from 'react';
function useMountedStateHook() {
    const isMounted = useRef(true);
    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    });
    return ($initalValue) => {
        const [state, setState] = ReactUseState($initalValue);
        return [
            state,
            ($newVal) => {
                if (!isMounted.current)
                    return;
                setState($newVal);
            },
        ];
    };
}
;
export default useMountedStateHook;
export const useMountedState = useMountedStateHook;
