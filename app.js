String.prototype.toSentenceCase = function() {
  const words = this.split(' ');
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

String.prototype.isQuestion = function() {
  const questionStarterWords = ['where', 'what', 'which', 'why', 'how', 'when', 'whom', 'who'];
  const endsWithQuestionMark = this[this.length - 1] === '?';
  const wordsArray = this.split(' ');
  const startsWithQuestionStarter = questionStarterWords.find(word => wordsArray[0].toLowerCase().startsWith(word));
  return Boolean(endsWithQuestionMark || startsWithQuestionStarter);
}

String.prototype.removePunctuationMarks = function() {
  const words = this.split(' ');
  const transformedWords = words.map(word => word.replace(/[\W_]+/gi, ''));
  return transformedWords.join(' ');
}

String.prototype.getFirstWord = function() {
  const words = this.split(' ');
  const firstWord = words[0].replace(/[\W_]+/gi, '')
  return firstWord;
}
