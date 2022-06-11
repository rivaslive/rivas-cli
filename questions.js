const customPath = '=== Created in custom path ===';

const reactQuestions = {
  framework: {
    type: 'list',
    name: 'framework',
    message: 'Select your framework.',
    choices: [
      {
        name: 'Reactjs',
        value: 'react'
      },
      {
        name: 'Nodejs (building)',
        value: 'node'
      }
    ]
  },
  location: {
    type: 'list',
    name: 'location',
    message: 'Select location for component.',
    choices: [
      'src/components/Atoms',
      'src/components/Molecules',
      'src/components/Organisms',
      'src/components/Template',
      customPath
    ]
  },
  locationPath: {
    type: 'input',
    name: 'locationPath',
    message: 'Insert location path.'
  },
  language: {
    type: 'list',
    name: 'language',
    message: 'Select language.',
    choices: ['javascript', 'typescript']
  },
  componentName: {
    type: 'input',
    name: 'componentName',
    message: 'Insert component name.'
  },
  template: {
    type: 'list',
    name: 'template',
    message: 'Select template.',
    choices: [
      {
        name: 'Component',
        value: 'component'
      },
      {
        name: 'Storybook',
        value: 'storybook'
      }
    ]
  }
};

module.exports = {
  customPath,
  reactQuestions
};
