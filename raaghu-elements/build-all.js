const path = require('path');
const fs = require('fs');
const { readFile, existsSync } = require('fs');
const util = require('util');
const http = require('http');
const { execSync } = require('child_process');
const exec = util.promisify(require('child_process').exec);
const projectRootFolder = 'src';
// const distPath = path.join(__dirname, 'rds-elements');
// const elementsFilePath = path.join(__dirname, 'projects', 'app-config', 'src', 'lib', 'elements.ts')

// const updateElementsTsFile = async () => {
//     if (existsSync(distPath)) {
//         const dirs = await getDirectories(distPath);
//         const elementsTsFile = (await fs.readFile(elementsFilePath)).toString().split('=')[1].trim().split('').filter(r => r !== ` ` && r !== `\r` && r !== `\n` && r !== `'`).join('');
//         const openingBracketIndex = elementsTsFile.indexOf('[');
//         const closingBracketIndex = elementsTsFile.indexOf(']');
//         let arr = elementsTsFile.substring(openingBracketIndex + 1, closingBracketIndex).split(',');

//         for (const dir of dirs) {
//             if (arr.includes(dir)) continue;
//             arr.push(dir);
//         }
//         arr.shift()
//         await fs.writeFile(elementsFilePath, `export const elements: string[] = [${arr.map(r => `'${r}'`).join(',')}]`)
//     }
// }

// const startServer = () => {
//     const server = http.createServer(async (request, response) => {
//         if (!request.url?.includes('.')) request.url = request.url + '/index.html';
//         let filePath = path.join(distPath, `${request.url.substring(1)}`);
//         if (existsSync(filePath)) {
//             readFile(filePath, function (error, content) {
//                 if (request.url?.endsWith('js')) {
//                     response.writeHead(200, { 'Content-Type': 'text/javascript' });
//                 } else {
//                     response.writeHead(200);
//                 }
//                 response.end(content, 'utf-8');
//             });
//         } else {
//             response.writeHead(404);
//             response.end('Resource not found', 'utf-8');
//         }
//     })
//     server.listen(3000);
//     console.log('Server listening on localhost:3000');
// }

const buildAllProjects = async (projects) => {
  // const projIn = ["rds-elements", "rds-icon", "rds-alert"];
  for (const project of Object.keys(projects)) {
    // if (project != "storybook" && projIn.indexOf(project) != -1) {
    if (project != "storybook") {
      console.log('Building project ' + project + '...');
      execSync(`ng build ${project}`, { cwd: process.cwd(), stdio: 'inherit' });
    }
  }
}

// const getDirectories = source => {
//   return fs.readdir(source, { withFileTypes: true })
//     .then(directories => directories.filter(d => d.isDirectory()).map(d => {
//       let prjName = '';
//       if (d.name == 'root') {
//         prjName = 'rds-elements';
//       } else {
//         prjName = d.name;
//       }
//       return prjName;
//     }))
// }

function getProjects() {
  return JSON.parse(fs.readFileSync(path.join(__dirname, 'angular.json')).toString()).projects
}

// function getArgs() {
//   const args = {};
//   process.argv
//     .slice(2, process.argv.length)
//     .forEach(arg => {
//       // long arg
//       if (arg.slice(0, 2) === '--') {
//         const longArg = arg.split('=');
//         const longArgFlag = longArg[0].slice(2, longArg[0].length);
//         const longArgValue = longArg.length > 1 ? longArg[1] : true;
//         args[longArgFlag] = longArgValue;
//       }
//       // flags
//       else if (arg[0] === '-') {
//         const flags = arg.slice(1, arg.length).split('');
//         flags.forEach(flag => {
//           args[flag] = true;
//         });
//       }
//     });
//   return args;
// }

async function start() {
  // const args = getArgs();
  // console.log('Argumenets: ' + args);

  // console.log(args)
  // if (args?.build !== "false") {
  // const directories = await getDirectories(path.join(__dirname, projectRootFolder));
  // console.log('Directories: ' + directories);

  const projects = getProjects();
  // console.log('Projects: ' + JSON.stringify(projects, null, 2));

  // const projectToBuild = args?.project;
  // console.log('Projects To Build: ' + projectToBuild.split(','));

  // if (projectToBuild) {
  //   if (projectToBuild.split(',').find(p => !projects.includes(p))) {
  //     console.log("Invalid project name " + projectToBuild);
  //     return;
  //   }
  //   // await buildAllProjects(directories);
  // } else {
  fs.rmSync(path.join(__dirname, 'rds-elements'), { recursive: true, force: true });
  fs.mkdirSync(path.join(__dirname, 'rds-elements'));
  console.log('Building projects from ' + projectRootFolder);
  await buildAllProjects(projects);
  // }
}

start();