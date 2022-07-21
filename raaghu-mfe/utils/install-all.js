const path = require('path');
const fse = require('fs-extra');
const { execSync } = require('child_process');
const elementsDir = path.join(__dirname, '../../raaghu-elements');

function installElements() {
    execSync(`npm install`, { cwd: elementsDir, stdio: 'inherit' });
};

function installMFE() {
    execSync(`npm install`, { cwd: process.cwd(), stdio: 'inherit' });
};

try {

    console.log('Installing raaghu elements...');
    installElements();

    console.log('Installing raaghu mfe...');
    installMFE();

} catch (error) {
    console.error(error);
}