const path = require('path');
const os = require('os');
const fse = require('fs-extra');
const { execSync } = require('child_process');
const currentDir = path.join(__dirname, '../');
const tempDir = path.join(os.tmpdir(), 'raaghu-elements-temp');
const ngElementsDir = path.join(tempDir, 'raaghu-elements');
const ngComponentsDir = path.join(__dirname, '../projects/libs/rds-elements');
const ngElementsRemote = 'https://github.com/Wai-Technologies/raaghu-elements.git';
const filesToReplace = [
    '.storybook',
    '.editorconfig',
    '.gitignore',
    'tsconfig.json'
]

function getArgs() {
    const args = {};
    process.argv
        .slice(2, process.argv.length)
        .forEach(arg => {
            const longArg = arg.split('=');
            let longArgFlag = '';
            if (arg.slice(0, 2) === '--') {
                longArgFlag = longArg[0].slice(2, longArg[0].length);
            } else {
                longArgFlag = longArg[0];
            }
            const longArgValue = longArg.length > 1 ? longArg[1] : true;
            args[longArgFlag] = longArgValue;

        });
    return args;
}

function replaceFiles() {
    for (const fileName of filesToReplace) {
        fse.copySync(path.join(ngElementsDir, fileName), path.join(ngComponentsDir, fileName), { overwrite: true });
    }
}

// function mergePackageJson() {
//     const ngComponentsFile = JSON.parse(fse.readFileSync(path.join(ngComponentsDir, 'package.json')).toString());
//     const ngElementsFile = JSON.parse(fse.readFileSync(path.join(ngElementsDir, 'package.json')).toString());
//     ngComponentsFile.scripts = { ...ngComponentsFile.scripts, ...ngElementsFile.scripts };
//     ngComponentsFile.dependencies = { ...ngComponentsFile.dependencies, ...ngElementsFile.dependencies };
//     ngComponentsFile.devDependencies = { ...ngComponentsFile.devDependencies, ...ngElementsFile.devDependencies };
//     return ngComponentsFile
// }

// function mergeAngularJson() {
//     const ngComponentsFile = JSON.parse(fse.readFileSync(path.join(ngComponentsDir, 'angular.json')).toString());
//     const ngElementsFile = JSON.parse(fse.readFileSync(path.join(ngElementsDir, 'angular.json')).toString());
//     ngComponentsFile.projects = { ...ngComponentsFile.projects, ...ngElementsFile.projects };
//     return ngComponentsFile;
// }

function mergeTSConfigJson() {
    let changesDone = false;
    const ngElementsFile = JSON.parse(fse.readFileSync(path.join(currentDir, 'tsconfig.json')).toString());
    if (ngElementsFile.compilerOptions.paths["@libs/rds-elements"] == undefined) {
        ngElementsFile.compilerOptions.paths = {
            ...ngElementsFile.compilerOptions.paths, "@libs/rds-elements": [
                "projects/libs/rds-elements/src/root/public-api.ts"
            ]
        };
        changesDone = true;
    };
    // if (ngElementsFile.compilerOptions.paths["@libs/rds-common-lib"] == undefined) {
    //     ngElementsFile.compilerOptions.paths = {
    //         ...ngElementsFile.compilerOptions.paths, "@libs/rds-common-lib": [
    //             "projects/libs/rds-elements/src/rds-app-config/src/public-api.ts"
    //         ]
    //     };
    // };
    if (changesDone) {
        console.log('updating tsconfig.json...');
        fse.writeFileSync(path.join(currentDir, 'tsconfig.json'), JSON.stringify(ngElementsFile));
    }
    // return ngElementsFile;
}

function copyProjects() {
    const ngElementsDirectories = getDirectories(path.join(ngElementsDir, 'src'));
    for (const dir of ngElementsDirectories) {
        fse.copySync(path.join(ngElementsDir, 'src', dir), path.join(ngComponentsDir, 'src', dir), { overwrite: true });
    }
}

function getDirectories(source) {
    return fse.readdirSync(source, { withFileTypes: true })
        .filter(d => d.isDirectory()).map(d => d.name);
}

try {
    console.log('fetching elements...');
    if (fse.existsSync(tempDir)) fse.rmSync(tempDir, { recursive: true, force: true });

    console.log('creating temporary directory...')
    fse.mkdirSync(path.join(tempDir));

    const args = getArgs();
    var branch = args?.branch;
    if(branch == undefined){ branch = 'main' } else { branch = args?.branch };
    console.log("cloning elements from the branch \x1b[32m'" + branch + "'\x1b[0m...");
    execSync(`git clone ${ngElementsRemote} --branch=${branch}`, { cwd: tempDir, stdio: 'inherit' });

    console.log('replacing config files...');
    replaceFiles();

    console.log('merging tsconfig.json file...');
    mergeTSConfigJson();

    console.log('copying over projects...');
    copyProjects();

    // console.log('updating package.json...');
    // fse.writeFileSync(path.join(ngComponentsDir, 'package.json'), JSON.stringify(updatedPackageJson));
    // console.log('updating angular.json...');
    // fse.writeFileSync(path.join(ngComponentsDir, 'angular.json'), JSON.stringify(updatedAngularJson));
    // console.log('installing dependencies...');

    // execSync(`npm install`, { cwd: ngComponentsDir, stdio: 'inherit' });
    if (fse.existsSync(tempDir)) fse.rmSync(tempDir, { recursive: true, force: true });
} catch (error) {
    console.error(error);
}