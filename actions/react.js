const fs = require('fs');
const inquirer = require('inquirer');

const { getComponentName } = require('../utils');
const { reactQuestions, customPath } = require('../questions');
const { resolveExtension, resolveTemplate } = require('../config');

const createComponent = ({
  template,
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

  if (template === resolveTemplate.react.storybook) {
    path = `${componentPath}/${name}.stories.${extension}`;
  }

  const contentFile =
    require(`../templates/${framework}/${template}/${language}`)({ name });

  fs.writeFile(path, contentFile, (err) => {
    if (err?.message) {
      console.log('The command failed with the next error:');
      console.log(err.message);
    }

    // logic for ATOMIC DESIGN
    if (template === resolveTemplate.react.component) {
      const stylePath = `${componentPath}/style.${singleExt}`;
      const indexPath = `${componentPath}/index.${singleExt}`;
      const indexFile =
        require(`../templates/${framework}/${template}/index.js`)(name);

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
    }
  });
};

const createReactComponent = ({
  template,
  language,
  framework,
  componentName,
  location
}) => {
  if (location === customPath) {
    inquirer.prompt([reactQuestions.locationPath]).then(({ locationPath }) => {
      createComponent({
        template,
        language,
        framework,
        componentName,
        location: locationPath
      });
    });
  } else {
    createComponent({
      template,
      language,
      framework,
      componentName,
      location
    });
  }
};

module.exports = {
  createReactComponent
};
