window.dom = {
  find(string) {
    return document.querySelectorAll(string);
  },
  style(node, key, value) {
    node.style[key] = value;
  },
  each(nodeList, fn) {
    for (i = 0; i < nodeList.length; i++) {
      fn(nodeList[i]);
    }
  },
};
