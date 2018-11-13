/* eslint-disable no-unused-expressions */
const { expect } = require('chai');
require('./app');

describe('The String Object extended', () => {
  it('Converts a string to sentence case', (done) => {
    const inputString = 'the NAME oF tHe Lord is a strong TOWEr.';
    const expectedResult = 'The name of the lord is a strong tower.';

    expect(inputString.toSentenceCase()).to.equal(expectedResult);
    done();
  });

  it('Ensures a string isn\'t more than 3 words', (done) => {
    const inputString = 'the NAME oF tHe Lord is a strong TOWEr.';
    const expectedResult = 'the NAME oF';

    expect(inputString.triplify()).to.equal(expectedResult);
    done();
  });

  it('Detects if an input string is a question or not', (done) => {
    const validQuestion = 'Who am I that you are mindful of me?';
    const questionWithoutMark = 'Where are we going';
    const statement = 'Return to the house';

    expect(validQuestion.isQuestion()).to.be.true;
    expect(statement.isQuestion()).to.be.false;
    expect(questionWithoutMark.isQuestion()).to.be.true;
    done();
  });

  it('Strips a string of all punctuation marks', (done) => {
    const sampleString = 'Whence, if I may ask, are you going to?';
    const expectedResult = 'Whence if I may ask are you going to';

    expect(sampleString.removePunctuationMarks()).to.equal(expectedResult);
    done();
  });

  it('Returns the first word of an input string', (done) => {
    const sampleString = 'Speak, I pray you.';
    const emptyString = ' ';

    expect(sampleString.getFirstWord()).to.not.include(',');
    expect(sampleString.getFirstWord()).to.equal('Speak');
    expect(emptyString.getFirstWord()).to.equal('');
    done();
  });
});
