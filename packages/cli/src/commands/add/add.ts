import { Command } from "commander";
import path from "node:path";
import color from "chalk";
import pc from "picocolors";
import { highlight, intro } from "../../utils/format";
import { existsSync } from "node:fs";
import { error } from "node:console";
import { handleError } from "../../utils/error";
import { registry } from "../../utils/components";

interface Options {
    components: string[];
    all: boolean;
    cwd: string;
};

export const add = new Command()
    .command("add")
    .description("add components to your project")
    .argument("[components...]", "name of components")
    .option("-c, --cwd <cwd>", "the working directory", process.cwd())
    .option("-a, --all", "install all components to your project", false)
    .action(async (components, opts) => {
        try {
            if(components.length < 1)
                intro('Add components to your project');
            else
                intro(`Add ${highlight(components)} to your project`);

            const options: Options = { components, ...opts };

            const cwd = path.resolve(options.cwd);
        
            if (!existsSync(cwd))
				throw error(`The path ${color.red(cwd)} does not exist. Please try again.`);

            await runAdd(cwd, options);
        } catch (error) {
            handleError(error);
        }
    });

const runAdd = async (cwd: string, options: Options) => {

    let selectedComponents = new Set(
		options.all ? registry.map(({ name }) => name) : options.components
	);
}