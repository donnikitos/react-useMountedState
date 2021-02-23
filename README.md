useMountedState
===========

[![NPM version](https://badgen.net/npm/v/react-usemountedstate)](https://www.npmjs.com/package/@donnikitos/react-usemountedstate)
[![License](https://badgen.net/npm/license/react-usemountedstate)](https://www.npmjs.com/package/@donnikitos/react-usemountedstate)

A React.js hook to use the official useState hook on super-duper complicated components with a lot asynchronous `setStates` that might be executed, when a component might be already unmounted.

Install with [npm](https://www.npmjs.com/):

```bash
# via npm
npm install --save-dev @donnikitos/react-useglobal
```

## Usage

The `useGlobal` function takes a string as the primary argument and may take a second argument - the initial value. The first argument, the supplied string
represents the name of a global variable, that the hook is supposed to interact with. The second argument is optional and represents the initial value, that
will be set to the global variable.
If the global variable is alrady set and has a value, the second argument (initial value) will be ignored.
The hook returns a tuple of a getter variable and a setter function very much like a normal useState hook in React.js.

```js
import React from 'react';
import useGlobal from '@donnikitos/react-useglobal';


// use in Component
export default function Comp(props) {
	const [globalX, setGlobalX] = useGlobal('x');						// Access global variable x
	const [globalY, setGlobalY] = useGlobal('y', 'Hello World');		// Access global variable y and set initial value to string 'Hello World'
	const [tryY, setTryY] = useGlobal('y', 'test me');					// Access global variable y, second argument will be ignored


	React.useEffect(() => {
		setGlobalX('i am global');										// change global variable
	}, []);


	return (<div>
		{globalX} {/* output: i am global */}<br />
		<br />
		{globalY} {/* output: Hello World */}<br />
		{tryY} {/* output: Hello World */}<br />
	</div>);
};
```

## License

[MIT](LICENSE) Copyright (c) 2020 Nikita 'donnikitos' Nitichevski.
