module.exports = ({ name }) => `
const ${name} = (props) => {
  return <div>${name}</div>;
};

export default ${name};

`;
