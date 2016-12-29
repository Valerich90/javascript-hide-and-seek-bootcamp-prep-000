function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector(`.target`)
}

function increaseRankBy(n) {
  var list = document.querySelectorAll(`ul.ranked-list li`)
  for (let i = 0; i < list.length; i++){
    list[i].innerHTML = (parseInt(list[i].innerHTML) + n).toString()
  }
}

function deepestChild() {
  var node = document.getElementById(`grand-node`)
  var next = []
  for (let i = 0; i < node.length; i++){
    if (Array.isArray(node[i])){
      next.push(node[i])
      node = next.shift()
    }
  }
  return node;
}
