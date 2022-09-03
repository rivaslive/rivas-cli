const fs = require('fs');

const { getComponentName } = require('../utils');
const { resolveExtension } = require('../config');

const createComponent = ({
  language,
  framework,
  componentName,
  location
}) => {
  const extension = resolveExtension[language];
  const singleExt = extension.replace('x', '');
  const name = getComponentName(componentName);
  const componentPath = `./${location}/${name}`;
  let path = `${componentPath}/${name}.${extension}`;

  if (!fs.existsSync(componentPath)) {
    console.log(`Creating location ${location}`);
    fs.mkdirSync(componentPath, { recursive: true });
    console.log('Folder created successfully.');
  }

  const contentFile = require(`../templates/${framework}/${language}`)({
    name
  });

  fs.writeFile(path, contentFile, (err) => {
    if (err?.message) {
      console.log('The command failed with the next error:');
      console.log(err.message);
    }

    // logic for ATOMIC DESIGN
    const stylePath = `${componentPath}/style.${singleExt}`;
    const indexPath = `${componentPath}/index.${singleExt}`;
    const indexFile = require(`../templates/${framework}/index.js`)(name);

    fs.writeFile(indexPath, indexFile, (err) => {
      if (err?.message) {
        console.log('The command failed with the next error:');
        console.log(err.message);
      }
    });

    fs.writeFile(stylePath, '', (err) => {
      if (err?.message) {
        console.log('The command failed with the next error:');
        console.log(err.message);
      }
    });
  });
};

module.exports = {
  createComponent
};
