const customPath = '=== Created in custom path ===';

const reactQuestions = {
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
    choices: ['typescript', 'javascript']
  },
  componentName: {
    type: 'input',
    name: 'componentName',
    message: 'Insert component name.'
  },
};

module.exports = {
  customPath,
  reactQuestions
};
