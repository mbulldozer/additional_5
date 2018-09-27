module.exports = function check(str, bracketsConfig) {

  let strArr = str.split("");

  for (let i = 0; i < strArr.length - 1; i++){
    const itemOne = strArr[i];
    const itemTwo = strArr[i + 1];
  
    for(let j = 0; j < bracketsConfig.length; j++){
      const contitionOne = itemOne == bracketsConfig[j][0];
      const contitionTwo = itemTwo == bracketsConfig[j][1];
  
      if(contitionOne && contitionTwo){
        strArr.splice(i, 2);
        i = -1;
        break;
      }
    }
  }
  return !strArr.length;
}