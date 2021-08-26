import { useEffect, useRef, useState as ReactUseState } from 'react';

function useMountedStateHook() {
	const isMounted = useRef(true);

	useEffect(() => {
		isMounted.current = true;

		return () => {
			isMounted.current = false;
		};
	}, []);

	return <T extends any>($initalValue: T) => {
		const [state, setState] = ReactUseState<T>($initalValue);

		return [
			state,
			($newVal: T) => {
				if (!isMounted.current) return;

				setState($newVal);
			},
		];
	};
}

export default useMountedStateHook;
export const useMountedState = useMountedStateHook;
