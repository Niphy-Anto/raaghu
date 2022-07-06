// Imports
const path = require('path');
const { execSync } = require('child_process');
const fs = require('fs');
const angularJsonPath = path.join(__dirname, '..', 'angular.json');

// Check whether the arguments passed contain the mfe name and the page name
if (process.argv.length !== 4) {
    console.log('Invalid command');
    process.exit(0);
}

// Parse the name of the mfe and the page name
const mfeName = process.argv[2];
const pageName = process.argv[3];

// Parse the angularJson file and get hold of the projects
const angularJson = JSON.parse(fs.readFileSync(angularJsonPath));
const projects = angularJson.projects;

// Check if the mfe exists in the angular.json and the project type is 'application'
if (projects[mfeName] && projects[mfeName].projectType === 'application') {
    // Get hold of the app folder path inside the mfe
    const appFolderPath = path.join(__dirname, '..', 'projects', mfeName, 'src', 'app');
    // Generate the page component using angular-cli
    if (fs.existsSync(appFolderPath)) {
        execSync(`ng g c ${pageName}`, { cwd: appFolderPath, stdio: 'inherit' });
        console.log("Done !!")
    } else {
        console.log("The app folder is missing from the provided mfe")
    }
} else {
    console.log("The mfe does not exist");
    process.exit(0);
}



