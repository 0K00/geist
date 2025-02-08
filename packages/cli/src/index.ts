#!/usr/bin/env node
import { Command } from "commander";
import { getPackageInfo } from "./utils/package";
import { add } from "./commands";

const main = async () => {

    const packageInfo = getPackageInfo();

    const program = new Command()
        .name("geist-svelte")
        .description("Add geist-svelte components to your project")
        .version(packageInfo.version || "0.0.0", "-v, --version", "display the version number");

    // program.addCommand() ▲ Geist Svelte
    program.addCommand(add)

    program.parse();
}

main();