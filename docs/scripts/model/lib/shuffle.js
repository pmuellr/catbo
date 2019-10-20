/**
 * @template T
 * @param {T[]} objects to  shuffle
 * @return {T[]}
 */
export function shuffle (objects) {
  const sortedObjects = objects.map(o => ({ key: Math.random(), val: o }))
  sortedObjects.sort((a, b) => a.key - b.key)
  return sortedObjects.map(o => o.val)
}
