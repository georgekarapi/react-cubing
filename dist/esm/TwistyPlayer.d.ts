/// <reference types="react" />
interface TwistyConfig {
    steps: number;
    percentage: number;
}
declare const TwistyPlayer: ({ steps, percentage }: TwistyConfig) => JSX.Element;
export default TwistyPlayer;
