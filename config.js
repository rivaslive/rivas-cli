const {customPath} = require('./questions');
const help = `
Welcome to rivas-cli!

List of resolve package:

- rivas-cli [name] [template] [path]

* [name]:       The component name.
* [language]:   Enum js | ts | tsx | typescript | javascript | --ts | --tsx | --js | --typescript | --javascript.
* [path]:       Path where we will create the component.
`

const resolveTemplate = {
  react: 'react',
  reactjs: 'react',
  'ts-react': 'react',
  'ts-reactjs': 'react'
};

const resolveExtension = {
  // javascript
  javascript: 'js',
  js: 'js',
  jsx: 'js',
  '--js': 'js',
  '--jsx': 'js',
  '--javascript': 'js',
  // typescript
  typescript: 'tsx',
  tsx: 'tsx',
  ts: 'tsx',
  '--typescript': 'tsx',
  '--ts': 'tsx',
  '--tsx': 'tsx',
}

const resolveLanguage = {
  // javascript
  javascript: 'javascript',
  js: 'javascript',
  jsx: 'javascript',
  '--js': 'javascript',
  '--jsx': 'javascript',
  '--javascript': 'javascript',
  // typescript
  typescript: 'typescript',
  tsx: 'typescript',
  ts: 'typescript',
  '--typescript': 'typescript',
  '--ts': 'typescript',
  '--tsx': 'typescript',
}

const resolveLocation = {
  'atoms': 'src/components/Atoms',
  'molecules': 'src/components/Molecules',
  'organisms': 'src/components/Organisms',
  'templates': 'src/components/Template',
  'custom': customPath,
}

module.exports = {
  help,
  resolveTemplate,
  resolveLanguage,
  resolveLocation,
  resolveExtension
};
