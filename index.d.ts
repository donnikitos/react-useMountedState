declare function useMountedState(): <T extends unknown>($initalValue: T) => (T | (($newVal: T) => void))[];
export default useMountedState;
