import {findAndReplace} from "../src/functions/findAndReplace";

describe('findAndReplace', () => {
  it('replaces all instances of the search string with the replacement string', () => {
    const originalText = 'Hello world, hello everyone.';
    const searchText = 'hello';
    const replacementText = 'hi';
    const expectedResult = 'Hello world, hi everyone.';

    const result = findAndReplace(originalText, searchText, replacementText);

    expect(result).toEqual(expectedResult);
  });

  it('case sensitive replacement', () => {
    const originalText = 'Hello World, hello everyone.';
    const searchText = 'Hello';
    const replacementText = 'Hi';
    const expectedResult = 'Hi World, hello everyone.';

    const result = findAndReplace(originalText, searchText, replacementText);

    expect(result).toEqual(expectedResult);
  });
});