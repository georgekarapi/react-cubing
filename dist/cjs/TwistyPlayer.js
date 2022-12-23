"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const twisty_1 = require("cubing/twisty");
const randomAlg = (steps) => {
    const sides = ['R', 'L', 'U', 'F'];
    return [...Array(steps)].map(() => sides[Math.floor(Math.random() * sides.length)]).join(' ');
};
const TwistyPlayer = ({ steps, percentage }) => {
    const [timeRange, setTimeRange] = (0, react_1.useState)({ start: 0, end: 1000 });
    const [twisty] = (0, react_1.useState)(new twisty_1.TwistyPlayer({
        background: 'none',
        hintFacelets: 'none',
        experimentalDragInput: 'none',
        experimentalSetupAnchor: 'end',
        alg: randomAlg(steps),
        visualization: 'PG3D',
        controlPanel: 'none',
        cameraLongitude: 90,
    }));
    const twistyRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        var _a;
        if (twisty) {
            twisty.experimentalModel.timeRange.get().then((e) => setTimeRange(e));
            (_a = twistyRef.current) === null || _a === void 0 ? void 0 : _a.appendChild(twisty);
        }
    }, [twisty]);
    (0, react_1.useEffect)(() => {
        if (twisty) {
            twisty.experimentalModel.timestampRequest.set((timeRange.end * percentage) / 100);
        }
    }, [percentage]);
    return (0, jsx_runtime_1.jsx)("div", { id: "twisty-container", ref: twistyRef });
};
exports.default = TwistyPlayer;
