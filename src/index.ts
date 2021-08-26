import {
	SetStateAction,
	useEffect,
	useRef,
	useState as ReactUseState,
} from 'react';

function useMountedStateHook() {
	const isMounted = useRef(true);

	useEffect(() => {
		isMounted.current = true;

		return () => {
			isMounted.current = false;
		};
	}, []);

	return <T extends unknown>(initialValue: T | (() => T)) => {
		const [state, setState] = ReactUseState<T>(initialValue);

		return [
			state,
			(newValue: SetStateAction<T>) => {
				if (!isMounted.current) return;

				setState(newValue);
			},
		];
	};
}

export default useMountedStateHook;
export const useMountedState = useMountedStateHook;
