const parseArrayToStringWithArticle = (arr: []): String => {
  let str = "";
  let arrSize = arr.length;

  arr.map((item, i) => {
    if (i === 0) {
      return (str += `${item}`);
    } else if (i + 1 === arrSize) {
      return (str += ` e ${item}`);
    }
    return (str += `, ${item}`);
  });

  return str;
};

export default parseArrayToStringWithArticle;
