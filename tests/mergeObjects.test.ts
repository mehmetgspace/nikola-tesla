import {mergeObjects} from "../src/functions/mergeObjects";

describe('mergeObjects', () => {
  test('merges multiple objects into one', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    const obj3 = { e: 5, f: 6 };

    const merged = mergeObjects(obj1, obj2, obj3);
    expect(merged).toEqual({ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 });
  });

  test('later objects overwrite earlier one', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    const obj3 = { c: 5, d: 6 };

    const merged = mergeObjects(obj1, obj2, obj3);
    expect(merged).toEqual({ a: 1, b: 3, c: 5, d: 6 });
  });

  test('handles empty objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = {};
    const obj3 = { c: 3, d: 4 };

    const merged = mergeObjects(obj1, obj2, obj3);
    expect(merged).toEqual({ a: 1, b: 2, c: 3, d: 4 });
  });
});