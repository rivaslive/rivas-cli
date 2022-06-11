const convertToCamelCase = (str = '') => {
  let outText = '';
  const wordArr = str.split(/(\s)|[-_]/g);
  for (let i in wordArr) {
    if (i > 0) {
      outText += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
    } else {
      outText += wordArr[i];
    }
  }

  return outText.replace(/(\s)/g, '');
};

const getComponentName = (componentName) => {
  const firstLetter = componentName[0];
  return `${firstLetter.toUpperCase()}${componentName.slice(1)}`;
};

module.exports = {
  convertToCamelCase,
  getComponentName
};
