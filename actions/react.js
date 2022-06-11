const fs = require('fs');
const { resolveExtension } = require('../config');

const getComponentName = (componentName) => {
  const firstLetter = componentName[0];
  return `${firstLetter.toUpperCase()}${componentName.slice(1)}`;
};

const createReactComponent = ({
  template,
  language,
  framework,
  componentName,
  location
}) => {
  console.log(componentName);
  const extension = resolveExtension[language];
  const name = getComponentName(componentName);

  if (!fs.existsSync(location)) {
    console.log(`Creating location ${location}`);
    fs.mkdirSync('./' + location, { recursive: true });
    console.log('Folder created successfully.');
  }

  const path = `${location}/${name}.${extension}`;
  const contentFile =
    require(`../templates/${framework}/${template}/${language}`)({ name });

  fs.writeFile(path, contentFile, (err) => {
    console.log(err);
    if (err?.message) {
      console.log('The command failed with the next error:');
      console.log(err.message);
    }
  });
};

module.exports = {
  createReactComponent
};
