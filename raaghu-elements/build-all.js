const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');
const projectRootFolder = 'src';

const buildAllProjects = async (projects) => {
  for (const project of Object.keys(projects)) {
    if (project != "storybook") {
      console.log('Building project ' + project + '...');
      execSync(`ng build ${project}`, { cwd: process.cwd(), stdio: 'inherit' });
    }
  }
}

function getProjects() {
  return JSON.parse(fs.readFileSync(path.join(__dirname, 'angular.json')).toString()).projects
}

async function start() {

  const projects = getProjects();
  fs.rmSync(path.join(__dirname, 'rds-elements'), { recursive: true, force: true });
  fs.mkdirSync(path.join(__dirname, 'rds-elements'));
  console.log('Building projects from ' + projectRootFolder);
  await buildAllProjects(projects);

}

start();