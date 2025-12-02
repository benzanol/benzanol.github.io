#!node

import { spawnSync, execSync } from "child_process";
import { resolve } from "path";
import fs from "fs";

const projects = [
    { name: "cart" },
    { name: "classdex" },
    { name: "apollonian-packing" },
    { name: "brainfun" },
    { name: "rice-datathon-2024" },
    {
        name: "symbulator",
        script: "sh build.sh dist/index.html",
    },
    { name: "portfolio" },
];

const onlyProject = process.argv[2];
if (onlyProject) {
    console.log("Only building project", onlyProject);
}

for (const project of projects) {
    if (onlyProject && project.name !== onlyProject) {
        continue;
    }

    const cwd = resolve(process.cwd(), "src", project.name);
    const base = project.output ?? project.name;

    const target = resolve(base);
    fs.rmSync(target, { recursive: true, force: true });

    console.log(`\n==================== ${project.name} ====================\n`);

    if (project.script) {
        console.log(`Running custom build for ${project.name}...`);
        execSync(project.script, { cwd, stdio: "inherit" });

        const distPath = resolve(cwd, "dist");
        fs.cpSync(distPath, target, { recursive: true });
        console.log(`→ Copied ${project.name}/dist to /${base}`);
    } else {
        console.log(`Building ${project.name} with Vite...`);
        spawnSync(
            "npx",
            ["vite", "build", `--base=/${base}`, `--outDir=${target}`],
            { cwd, stdio: "inherit" }
        );
    }
}
