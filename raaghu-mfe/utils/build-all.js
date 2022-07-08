
// Imports
const path = require('path');
const { execSync } = require('child_process');
const fs = require('fs');
const tsconfigPath = path.join(__dirname, '..', 'tsconfig.json');

if (process.argv.length > 3) {
    console.log('Invalid command');
    process.exit(0);
}

console.log('Building all projects...')

const projects = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'angular.json')).toString()).projects;

for (const project of Object.keys(projects)) {
    if (projects[project]["projectType"] === 'application' && project.indexOf('storybook') == -1) {
        execSync(`ng build ${project}`, { cwd: process.cwd(), stdio: 'inherit' });
    }
}

console.log('Done...')