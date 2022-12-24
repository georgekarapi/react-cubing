import { useEffect, useState, useRef } from 'react';
import { TwistyPlayer as TP } from 'cubing/twisty';

interface TwistyConfig {
  steps: number;
  percentage: number;
}

const randomAlg = (steps: number) => {
  const sides = ['R', 'L', 'U', 'F'];

  return [...Array(steps)].map(() => sides[Math.floor(Math.random() * sides.length)]).join(' ');
};

const TwistyPlayer = ({ steps, percentage }: TwistyConfig) => {
  const [timeRange, setTimeRange] = useState({ start: 0, end: 1000 });
  const [twisty, setTwisty] = useState<null | TP>();
  const twistyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const twistyTemp = new TP({
      background: 'none',
      hintFacelets: 'none',
      experimentalDragInput: 'none',
      experimentalSetupAnchor: 'end',
      alg: randomAlg(steps),
      visualization: 'PG3D',
      controlPanel: 'none',
    });
    twistyTemp.experimentalModel.timeRange.get().then((e) => setTimeRange(e));
    twistyRef.current?.appendChild(twistyTemp);
    setTwisty(twistyTemp);
  }, []);

  useEffect(() => {
    if (twisty) {
      twisty.experimentalModel.timestampRequest.set((timeRange.end * percentage) / 100);
    }
  }, [percentage]);

  return <div id="twisty-container" ref={twistyRef} />;
};

export default TwistyPlayer;
