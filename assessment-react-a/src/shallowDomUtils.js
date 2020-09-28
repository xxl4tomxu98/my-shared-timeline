export function findElementInTree(element, tree) {
  if (tree.length === 0) {
    return undefined;
  }
  if (tree.length > 1) {
    let value = null;
    for (let i = 0; i < tree.length && !value; i += 1) {
      value = findElementInTree(element, tree.at(i));
    }
    return value;
  }
  const name = tree.name();
  if (name === element) {
    return tree;
  }
  let subtree;
  if (/^[a-z]/.test(name) && !/^with/.test(name)) {
    subtree = tree.children();
  } else {
    subtree = tree.dive();
  }
  return findElementInTree(element, subtree);
}

export function findElementsInTree(element, tree) {
  if (tree.length === 0) {
    return [];
  }
  if (tree.length > 1) {
    let values = [];
    for (let i = 0; i < tree.length; i += 1) {
      values = values.concat(findElementsInTree(element, tree.at(i)));
    }
    return values.filter(x => x);
  }
  const name = tree.name();
  if (name === element) {
    return [tree];
  }
  let subtree;
  if (/^[a-z]/.test(name) && !/^with/.test(name)) {
    subtree = tree.children();
  } else {
    subtree = tree.dive();
  }
  return [...findElementsInTree(element, subtree)];
}
