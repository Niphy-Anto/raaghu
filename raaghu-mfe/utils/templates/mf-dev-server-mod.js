"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const workspace_1 = require("./workspace");
const colors_1 = require("./colors");
let padding;
function startCmd(name, cmd) {
  const process = child_process_1.exec(cmd);
  process.stdout.on('data', (chunk) => {
    colors_1.print(name, padding, chunk);
  });
  process.stderr.on('data', (chunk) => {
    colors_1.print(name, padding, chunk, true);
  });
}
// tslint:disable-next-line: no-shadowed-variable
function startApps(apps) {
  for (const app of apps) {
    const cmd = `ng serve ${app.name}`;
    colors_1.print('DEVSVR', padding, app.name + ' ' + app.port);
    startCmd(app.name, cmd);
  }
}
if (!workspace_1.isWorkspace()) {
  console.error('This needs to be started in the root of an Angular project!');
  process.exit(0);
}
const projects = workspace_1.readProjectInfos();
let projectsToRun = "";
let apps;
if (process.env["npm_config_projects"] != undefined) {
  projectsToRun = process.env["npm_config_projects"].split(',');
  apps = projects.filter(p => p.projectType === 'application' && projectsToRun.includes(p.name));
} else {
  apps = projects.filter(p => p.projectType === 'application' && p.name.indexOf('storybook') == -1);
}
padding = apps.reduce((acc, p) => Math.max(acc, p.name.length), 0);
padding = Math.max(6, padding);
startApps(apps);
