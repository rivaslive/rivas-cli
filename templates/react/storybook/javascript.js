module.exports = ({ name }) => `import { ${name} } from './${name}';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: '${name}',
  component: ${name},
};

`;
