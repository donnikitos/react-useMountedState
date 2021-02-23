declare function useMountedStateHook(): <T extends unknown>($initalValue: T) => (T | (($newVal: T) => void))[];
export default useMountedStateHook;
export declare const useMountedState: typeof useMountedStateHook;
