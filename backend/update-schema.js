const fs = require('fs');

// Path to the package.json file
const packageJsonPath = 'client/client/package.json';

// Read the package.json file
fs.readFile(packageJsonPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading package.json file:', err);
    return;
  }

  try {
    // Parse the JSON data
    const packageJson = JSON.parse(data);

    // Update the $schema property
    packageJson.$schema = 'https://json.schemastore.org/package.json';

    // Convert the updated object back to JSON
    const updatedPackageJson = JSON.stringify(packageJson, null, 2);

    // Write the updated JSON back to the file
    fs.writeFile(packageJsonPath, updatedPackageJson, 'utf8', (err) => {
      if (err) {
        console.error('Error writing updated package.json file:', err);
        return;
      }
      console.log('package.json file updated successfully!');
    });
  } catch (error) {
    console.error('Error parsing package.json file:', error);
  }
});
