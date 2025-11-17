import { execSync } from "child_process";
import { resolve } from "path";
import fs from "fs";

const projects = [
    { name: "cart" },
    { name: "classdex" },
    {
        name: "symbulator",
        script: "sh build.sh dist/index.html",
    },
    { name: "termui" },
];

for (const project of projects) {
    const cwd = resolve(process.cwd(), "src", project.name);

    console.log(`\n==================== ${project.name} ====================\n`);

    if (project.script) {
        console.log(`Running custom build for ${project.name}...`);
        execSync(project.script, { cwd, stdio: "inherit" });
    } else {
        console.log(`Building ${project.name} with Vite...`);
        execSync("npx vite build", {
            cwd,
            stdio: "inherit",
        });
    }

    const distPath = resolve(cwd, "dist");
    const target = resolve(project.name);
    fs.rmSync(target, { recursive: true, force: true });
    fs.cpSync(distPath, target, { recursive: true });
    console.log(`→ Copied ${project}/dist to /${project}`);
}
