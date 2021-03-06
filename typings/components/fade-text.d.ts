import { FadeTextOptions } from "../options/fade-text-options";
import { Text } from "./Text";
declare class FadeText extends Text {
    time: number;
    fade: number;
    last: number;
    constructor(options: FadeTextOptions);
    update(): void;
}
export { FadeText };
