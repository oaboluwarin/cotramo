String.prototype.toSentenceCase = function() {
  const words = this.split(' ');
  console.log('first element', words[0]);
  const transformedWords = words.map(word => {
    return word === words[0] ? `${word.charAt(0).toUpperCase()}${(word.slice(1)).toLowerCase()}` : word.toLowerCase();
  });
  return transformedWords.join(' ');
}

String.prototype.triplify = function() {
  const words = this.split(' ');
  const firstThreeWords = words.slice(0, 3);
  return firstThreeWords.join(' ');
}
