const { expect } = require('chai');
require('./app');

describe('The sentence case method functionality', () => {
  it('Converts a string to sentence case', (done) => {
    const inputString = 'the NAME oF tHe Lord is a strong TOWEr.';
    const expectedResult = 'The name of the lord is a strong tower.';

    console.log(inputString.toSentenceCase());
    expect(inputString.toSentenceCase()).to.equal(expectedResult);
  });

  it('Ensures a string isn\'t more than 3 words', (done) => {
    const inputString = 'the NAME oF tHe Lord is a strong TOWEr.';
    const expectedResult = 'The name of';

    console.log(inputString.triplify());
    expect(inputString.triplify()).to.equal(expectedResult);
  });
})
