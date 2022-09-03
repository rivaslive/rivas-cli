module.exports = ({ name }) => `type ${name}Props = {}

const ${name} = (props: ${name}Props) => {
  return <div>${name}</div>;
};

export default ${name};

`;
