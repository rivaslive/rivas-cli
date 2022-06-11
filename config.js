const help = `
Welcome to rivas-cli!

List of resolve package:

- rivas-cli [patter] [component] [language]

* [Patter]:    Patter Design is Enum component | storybook.
* [component]:      The component name.
* [language]:  Is a language valid for extension file Enum. js | ts | tsx | typescript | javascript | --ts | --tsx | --js | --typescript | --javascript.
`

const resolveEnv = {
  react: 'react',
  reactjs: 'react',
  node: 'node',
  nodejs: 'node'
};

const resolveTemplate = {
  react: {
    component: 'component',
    storybook: 'storybook',
  },
  node: {
    atomic: 'atomic'
  }
};

const resolveExtension = {
  javascript: 'js',
  typescript: 'tsx',
  js: 'js',
  tsx: 'tsx',
  ts: 'tsx',
  '--typescript': 'tsx',
  '--javascript': 'tsx',
  '--ts': 'tsx',
  '--js': 'tsx',
}

const resolveLanguage = {
  javascript: 'javascript',
  js: 'javascript',
  '--js': 'javascript',
  '--jsx': 'javascript',
  '--javascript': 'javascript',
  // ts paths
  tsx: 'typescript',
  ts: 'typescript',
  typescript: 'typescript',
  '--typescript': 'typescript',
  '--ts': 'typescript',
  '--tsx': 'typescript',
}

module.exports = {
  help,
  resolveEnv,
  resolveLanguage,
  resolveTemplate,
  resolveExtension
};
