// function returns a String of texts
// between keyphrases like : zzzz keyphrase useful text od any lenht keyphrase rubbish
getText = (str, keyPhraseOne, keyPhraseTwo) => {
  var arr = [];
  var newStr = '';
  return new Promise ((resolve, reject) => {
    if (str.length<keyPhraseOne.length){
      reject('Provided string is shorter then a keyPhrase');
    }
    do{
      var fIndex = str.indexOf(keyPhraseOne);
      var lIndex = str.indexOf(keyPhraseTwo, fIndex+keyPhraseOne.length);
      var lastIndex = str.lastIndexOf(keyPhraseTwo);
      // console.log(fIndex,lIndex,lastIndex);
      newStr+=(str.substring(fIndex+keyPhraseOne.length,lIndex));
      str = str.slice(lIndex+keyPhraseTwo.length);
    } while (lIndex<lastIndex);
    resolve(newStr);
  });
}


module.exports = {
  getText
}
