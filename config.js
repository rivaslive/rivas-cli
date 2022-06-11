const resolveEnv = {
  react: 'react',
  reactjs: 'react',
  node: 'node',
  nodejs: 'node'
};

const resolveTemplate = {
  react: {
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
  '--javascript': 'javascript',
  // ts paths
  tsx: 'typescript',
  ts: 'typescript',
  typescript: 'typescript',
  '--typescript': 'typescript',
  '--ts': 'typescript',
}

module.exports = {
  resolveEnv,
  resolveLanguage,
  resolveTemplate,
  resolveExtension
};
