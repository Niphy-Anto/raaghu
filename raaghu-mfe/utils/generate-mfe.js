
// Imports
const path = require('path');
const { execSync } = require('child_process');
const fs = require('fs');
const tsconfigPath = path.join(__dirname, '..', 'tsconfig.json');
process.argv.splice(0, 2);

if (process.argv.length > 6) {
    console.log('Invalid command');
    process.exit(0);
}

if (process.argv.length == 2) {
    if (isNaN(process.argv[process.argv.length - 1])) {
        console.log('Invalid port');
        process.exit(0);
    }
    var mfeName = process.argv[process.argv.length - 2];
    var port = process.argv[process.argv.length - 1];
}
else
    if (process.argv.length == 3) {
        if (isNaN(process.argv[process.argv.length - 2])) {
            console.log('Invalid port');
            process.exit(0);
        }
        var mfeName = process.argv[process.argv.length - 3];
        var port = process.argv[process.argv.length - 2];
        var templateName = process.argv[process.argv.length - 1];
    }

console.log('Creating application...')
execSync(`ng g application ${mfeName} --routing=true --style=scss`, { cwd: process.cwd(), stdio: 'inherit' });

console.log('Adding module federation...')
execSync(`ng add @angular-architects/module-federation --project=${mfeName} --port=${port}`, { cwd: process.cwd(), stdio: 'inherit' });

console.log('Adding state management...')
execSync(`ng g cl state/${mfeName}/${mfeName} --skip-tests=true --type=actions --project=@libs/state-management`, { cwd: process.cwd(), stdio: 'inherit' });
execSync(`ng g cl state/${mfeName}/${mfeName} --skip-tests=true --type=effects --project=@libs/state-management`, { cwd: process.cwd(), stdio: 'inherit' });
execSync(`ng g cl state/${mfeName}/${mfeName} --skip-tests=true --type=reducers --project=@libs/state-management`, { cwd: process.cwd(), stdio: 'inherit' });
execSync(`ng g cl state/${mfeName}/${mfeName} --skip-tests=true --type=selectors --project=@libs/state-management`, { cwd: process.cwd(), stdio: 'inherit' });
execSync(`ng g cl state/${mfeName}/${mfeName} --skip-tests=true --type=models --project=@libs/state-management`, { cwd: process.cwd(), stdio: 'inherit' });

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

if (process.argv.length == 3) {
    // Html Template File
    const navigationTemplatePath = path.join(__dirname, '..', 'projects', `${mfeName}`, 'src', 'app', 'app.component.html');
    const navigationTemplateFileContent = fs.readFileSync(path.join(__dirname, 'templates', `${templateName}` + '.html')).toString();
    fs.writeFileSync(navigationTemplatePath, navigationTemplateFileContent)
}

// State Management Files
const stateManagementPathActions = path.join(__dirname, '..', 'projects', 'libs', 'state-management', 'src', 'lib', 'state', `${mfeName}`, `${mfeName}` + '.actions.ts');
const stateManagementFileContentActions = fs.readFileSync(path.join(__dirname, 'templates', 'state-management-template', 'sample.actions.ts')).toString();
fs.writeFileSync(stateManagementPathActions, stateManagementFileContentActions)

const stateManagementPathEffects = path.join(__dirname, '..', 'projects', 'libs', 'state-management', 'src', 'lib', 'state', `${mfeName}`, `${mfeName}` + '.effects.ts');
const stateManagementFileContentEffects = fs.readFileSync(path.join(__dirname, 'templates', 'state-management-template', 'sample.effects.ts')).toString();
fs.writeFileSync(stateManagementPathEffects, stateManagementFileContentEffects)

const stateManagementPathReducers = path.join(__dirname, '..', 'projects', 'libs', 'state-management', 'src', 'lib', 'state', `${mfeName}`, `${mfeName}` + '.reducers.ts');
const stateManagementFileContentReducers = fs.readFileSync(path.join(__dirname, 'templates', 'state-management-template', 'sample.reducers.ts')).toString();
fs.writeFileSync(stateManagementPathReducers, stateManagementFileContentReducers)

const stateManagementPathSelectors = path.join(__dirname, '..', 'projects', 'libs', 'state-management', 'src', 'lib', 'state', `${mfeName}`, `${mfeName}` + '.selectors.ts');
const stateManagementFileContentSelectors = fs.readFileSync(path.join(__dirname, 'templates', 'state-management-template', 'sample.selectors.ts')).toString();
fs.writeFileSync(stateManagementPathSelectors, stateManagementFileContentSelectors)

const stateManagementPathModels = path.join(__dirname, '..', 'projects', 'libs', 'state-management', 'src', 'lib', 'state', `${mfeName}`, `${mfeName}` + '.models.ts');
const stateManagementFileContentModels = fs.readFileSync(path.join(__dirname, 'templates', 'state-management-template', 'sample.models.ts')).toString();
fs.writeFileSync(stateManagementPathModels, stateManagementFileContentModels)

console.log('Done !!')