
// Imports
// const express = require('express');
// import appRoot from 'app-root-path';
// const http = require('http');
const path = require('path');
const { execSync } = require('child_process');
const fs = require('fs');
const tsconfigPath = path.join(__dirname, '..', 'tsconfig.json');

if (process.argv.length > 3) {
    console.log('Invalid command');
    process.exit(0);
}

console.log('Running all projects...')

// const projects = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'angular.json')).toString()).projects;

// for (const project of Object.keys(projects)) {
//     if (projects[project]["projectType"] === 'application' && project.indexOf('storybook') == -1) {
//         console.log(project + " - " + projects[project]["architect"]["serve"]["options"]["port"]);
//         // execSync(`ng build ${project}`, { cwd: process.cwd(), stdio: 'inherit' });
//     }
// }

// ===========================================================================
// execSync(`lite-server --baseDir=dist/rds-components`, { cwd: process.cwd(), stdio: 'ignore', detached: true });
// execSync(`lite-server --baseDir=dist/host`, { cwd: process.cwd(), stdio: 'ignore', detached: true });

// ===========================================================================
// let app = http.createServer((req, res) => {
//     // Set a response type of plain text for the response
//     res.writeHead(200, { 'Content-Type': 'text/plain' });

//     // Send back a response and end the connection
//     res.end('Hello World!\n');
// });

// app.listen(8080, '127.0.0.1');
// console.log('Node server running on port 8080');
// ===========================================================================
// const app = express();
// app.use(express.static(path.join(__dirname, 'dist', 'host')));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist/host/index.html'));
// });
// ===========================================================================
// const express = require('express');
// const app = express(),
//     bodyParser = require("body-parser");
// port = 3080;

// const users = [];

// app.use(bodyParser.json());
// app.use(express.static(process.cwd() + "/dist/rds-components/"));

// app.listen(port, () => {
//     console.log(`Server listening on the port::${port}`);
// });

console.log('Done...')