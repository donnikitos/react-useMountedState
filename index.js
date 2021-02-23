"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useMountedState() {
    const isMounted = react_1.useRef(true);
    react_1.useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    });
    return ($initalValue) => {
        const [state, setState] = react_1.useState($initalValue);
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
exports.default = useMountedState;
//# sourceMappingURL=index.js.map