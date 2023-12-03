/**
 * Merge multiple objects into one.
 *
 * @param {...Object[]} objects - An array of objects to be merged.
 * @returns {Object} The merged object.
 */
export const mergeObjects = (...objects: Object[]): Object => {
  return Object.assign({}, ...objects);
}