useMountedState
===========

[![NPM version](https://badgen.net/npm/v/react-usemountedstate)](https://www.npmjs.com/package/@donnikitos/react-usemountedstate)
[![License](https://badgen.net/npm/license/react-usemountedstate)](https://www.npmjs.com/package/@donnikitos/react-usemountedstate)

A React.js hook to use the official useState hook on super-duper complicated components with a lot asynchronous `setStates` that might be executed, when a component might be already unmounted.

Install with [npm](https://www.npmjs.com/):

```bash
# via npm
npm install --save-dev @donnikitos/react-usemountedstate

# via yarn
yarn add --dev @donnikitos/react-usemountedstate
```

## Usage

The `useMountedState` function takes no arguments, it creates the slightly special `useState` hook.
It returns a function, that is supposed to be used instead of the original `useState`.
Otherwise the useState usage remains the same.

```js
import React, {useState as useReactState} from 'react';
import useMountedState from '@donnikitos/react-usemountedstate';


// use in Component
function App(props) {
	const [showComp, setShowComp] = useReactState(true);


	React.useEffect(() => {
		setTimeout(() => {
			setShowComp(false);
		}, 3000);
	}, []);


	return (<>
		{showComp && <Comp />}
	</>);
};

function Comp(props) {
	const useState = useMountedState();								// Create useState hook -> instead of the original React.useState

	const [somestate, setSomestate] = useState('initial value');	// Use the new hook as usual! Just like React.useState


	React.useEffect(() => {
		setTimeout(() => {
			setSomestate('Other value!');							// That should not be done!!! It should be cleaned up properly!
		}, 6000);
	}, []);


	return (<div>
		{somestate}
	</div>);
};
```

## License

[MIT](LICENSE) Copyright (c) 2020 Nikita 'donnikitos' Nitichevski.
