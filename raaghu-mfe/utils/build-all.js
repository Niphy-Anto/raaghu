
// Imports
const path = require('path');
const { execSync } = require('child_process');
const fs = require('fs');
const appConfig = JSON.parse(fs.readFileSync(path.join(__dirname, '../projects/host/src/assets', 'appconfig.json')).toString());
const mfeFilePath = path.join(__dirname, '../projects', 'mfe-config.ts');
const mfeFilePathTemp = path.join(__dirname, '../projects', 'mfe-config-temp.ts');
const projects = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'angular.json')).toString()).projects;

if (process.argv.length > 3) {
    console.log('Invalid command');
    process.exit(0);
}

if (appConfig.replaceUrl == "true") {

    console.log('Changing URLs in mfe-config.json file...');
    fs.copyFileSync(mfeFilePath, mfeFilePathTemp);
    let mfeConfig = fs.readFileSync(mfeFilePath).toString();
    let mfeConfigJSON = mfeConfig.substring(mfeConfig.indexOf("{"), mfeConfig.lastIndexOf("}") + 1);

    mfeConfigJSON = mfeConfigJSON.replace(/\'/g, "\"");
    mfeConfigJSON = mfeConfigJSON.replace(/([a-zA-Z]*): {/g, "\"$1\": {");
    mfeConfigJSON = mfeConfigJSON.replace(/url:/g, "\"url\":");
    mfeConfigJSON = mfeConfigJSON.replace(/\",/g, "\"");
    mfeConfigJSON = JSON.parse(mfeConfigJSON);

    for (const mfeConf of Object.keys(mfeConfigJSON)) {
        let url = mfeConfigJSON[mfeConf].url;
        if (mfeConf == "host") {
            url = url.replace(/(http:\/\/localhost:)\d{4}/g, appConfig.appBaseUrl);
        } else {
            url = url.replace(/(http:\/\/localhost:)\d{4}/g, appConfig.appBaseUrl + "/" + mfeConf);
        }
        mfeConfigJSON[mfeConf].url = url;
    }
    mfeConfig = mfeConfig.substring(0, mfeConfig.indexOf("{")) + JSON.stringify(mfeConfigJSON, null, 2);
    mfeConfig = mfeConfig.replace(/\"url\":/g, "url:");
    mfeConfig = mfeConfig.replace(/\"/g, "");
    mfeConfig = mfeConfig.replace(/http:\/\//g, "\'http:\/\/");
    mfeConfig = mfeConfig.replace(/.js/g, ".js\'");
    fs.writeFileSync(mfeFilePath, mfeConfig);
}

console.log('Building all projects...');
for (const project of Object.keys(projects)) {
    if (projects[project]["projectType"] === 'application' && project.indexOf('storybook') == -1) {
        execSync(`ng build ${project}`, { cwd: process.cwd(), stdio: 'inherit' });
    }
}

console.log('Deleting temporary files...');
if (appConfig.replaceUrl == "true") {
    fs.copyFileSync(mfeFilePathTemp, mfeFilePath);
    if (fs.existsSync(mfeFilePathTemp)) {
        fs.unlinkSync(mfeFilePathTemp)
    }
}

console.log('Done...');