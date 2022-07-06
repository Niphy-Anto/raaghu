const fs = require('fs-extra');
const path = require('path');

const mfDevServerPath = path.join(__dirname, '..', "node_modules", "@angular-architects", "module-federation", "src", "server", "mf-dev-server.js")
if (fs.existsSync(mfDevServerPath)) {
    fs.writeFileSync(mfDevServerPath, fs.readFileSync(path.join(__dirname, 'templates', 'mf-dev-server-mod.js')).toString())
} else {
    console.log("--------------------------------------------------------------------")
    console.warn("The mf-dev-server.js file does not exist in node_modules")
    console.warn("Please check if @angular-architects/module-federation is installed")
    console.warn("Run npm i @angular-architects/module-federation to install the package")
    console.log("--------------------------------------------------------------------")
}