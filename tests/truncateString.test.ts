import {truncateString} from "../src/functions/truncateString";

describe('truncateString', () => {
  test('should truncate a string that is longer than the specified length', () => {
    expect(truncateString('Hello, world!', 8)).toBe('Hello, w...');
  });
});