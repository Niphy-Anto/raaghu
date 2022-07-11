// Imports
const path = require('path');
const { execSync } = require('child_process');
const fs = require('fs');
const tsconfigPath = path.join(__dirname, '..', 'tsconfig.json');

if (process.argv.length > 5) {
  console.log('Invalid command');
  process.exit(0);
}

if (isNaN(process.argv[process.argv.length - 1])) {
  console.log('Invalid port');
  process.exit(0);
}

const mfeName = process.argv[process.argv.length - 3];
const port = process.argv[process.argv.length - 2];
const templateName = process.argv[process.argv.length - 1]

console.log('Creating application...')
execSync(`ng g application ${mfeName} --routing=true --style=scss`, { cwd: process.cwd(), stdio: 'inherit' });

console.log('Adding module federation...')
execSync(`ng add @angular-architects/module-federation --project=${mfeName} --port=${port}`, { cwd: process.cwd(), stdio: 'inherit' });


const existingWebpackFilePath = path.join(__dirname, '..', 'projects', `${mfeName}`, 'webpack.config.js');
let newWebpackFile = fs.readFileSync(path.join(__dirname, 'templates', 'webpack-template.js')).toString();
const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath).toString());
const commonLibs = Object.keys(tsconfig.compilerOptions.paths);
while (newWebpackFile.includes('{{ mfeName }}')) {
  newWebpackFile = newWebpackFile.replace('{{ mfeName }}', mfeName);
}
newWebpackFile = newWebpackFile.replace('{{ commonLibs }}', `[${commonLibs.toString().split(',').map(r => r.trim()).map(r => `'${r}'`).join(',')}]`);
fs.writeFileSync(existingWebpackFilePath, newWebpackFile)


// Replace routing module file
const appRoutingModuleFilePath = path.join(__dirname, '..', 'projects', `${mfeName}`, 'src', 'app', 'app-routing.module.ts');
const appRoutingModuleFileContent = fs.readFileSync(path.join(__dirname, 'templates', 'app-routing-template.module.ts')).toString();
fs.writeFileSync(appRoutingModuleFilePath, appRoutingModuleFileContent)

const navigationTemplatePath = path.join(__dirname, '..', 'projects', `${mfeName}`, 'src', 'app', 'app.component.html');
const navigationTemplateFileContent = fs.readFileSync(path.join(__dirname, 'templates', `${templateName}` + '.html')).toString();
fs.writeFileSync(navigationTemplatePath, navigationTemplateFileContent)


console.log('Done !!')
