import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState, useRef } from 'react';
import { TwistyPlayer as TP } from 'cubing/twisty';
const randomAlg = (steps) => {
    const sides = ['R', 'L', 'U', 'F'];
    return [...Array(steps)].map(() => sides[Math.floor(Math.random() * sides.length)]).join(' ');
};
const TwistyPlayer = ({ steps, percentage }) => {
    const [timeRange, setTimeRange] = useState({ start: 0, end: 1000 });
    const [twisty] = useState(new TP({
        background: 'none',
        hintFacelets: 'none',
        experimentalDragInput: 'none',
        experimentalSetupAnchor: 'end',
        alg: randomAlg(steps),
        visualization: 'PG3D',
        controlPanel: 'none',
        cameraLongitude: 90,
    }));
    const twistyRef = useRef(null);
    useEffect(() => {
        var _a;
        if (twisty) {
            twisty.experimentalModel.timeRange.get().then((e) => setTimeRange(e));
            (_a = twistyRef.current) === null || _a === void 0 ? void 0 : _a.appendChild(twisty);
        }
    }, [twisty]);
    useEffect(() => {
        if (twisty) {
            twisty.experimentalModel.timestampRequest.set((timeRange.end * percentage) / 100);
        }
    }, [percentage]);
    return _jsx("div", { id: "twisty-container", ref: twistyRef });
};
export default TwistyPlayer;
