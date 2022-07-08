
// Imports
const { execSync } = require('child_process');

if (process.argv.length > 3) {
    console.log('Invalid command');
    process.exit(0);
}

const libName = process.argv[process.argv.length - 1];

console.log('Creating library...')
execSync(`ng g lib @libs/${libName}`, { cwd: process.cwd(), stdio: 'inherit' });

console.log('Done...')