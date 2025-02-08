import color from "chalk";
import * as p from '@clack/prompts';
import pc from "picocolors";

export const highlight = (...args: unknown[]) => color.bold.red(...args);

export const intro = (_message: string) => {
    p.intro(`${pc.bgRed(pc.bold('▒ Geist Svelte '))} ${_message}`);
}