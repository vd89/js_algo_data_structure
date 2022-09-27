function findLowestCommonAncestor (_root, _val1, _val2) {
  function findLowestCommonAncestorHelper (root, val1, val2) {
    if (!root) return
    if (Math.max(val1, val2) < root.value) {
      return findLowestCommonAncestorHelper(root.left, val1, val2)
    }
    if (Math.min(val1, val2) > root.value) {
      return findLowestCommonAncestorHelper(root.right, val1, val2)
    }
    return root.value
  }
  return findLowestCommonAncestorHelper(_root, _val1, _val2)
}

const node1 = {
  value: 1,
  left: {
    value: 0
  },
  right: {
    value: 2
  }
}

const node2 = {
  value: 1,
  left: {
    value: 0,
    left: {
      value: -1
    },
    right: {
      value: 0.5
    }
  },
  right: {
    value: 2
  }
}

console.log(findLowestCommonAncestor(node1, 0, 2)) // 1
console.log(findLowestCommonAncestor(node2, 0, 2)) // 1
console.log(findLowestCommonAncestor(node1, 0.5, -1)) // 0

function printKthLevels (root, k) {
  const arrayKth = new Array(0)
  const queue = new Array(0)

  if (!root) return

  // Breath first search for tree
  queue.push([root, 0])

  while (queue.length) {
    const tuple = queue.shift()
    const temp = tuple[0]
    const height = tuple[1]

    if (height == k) {
      arrayKth.push(temp.value)
    }
    if (temp.left) {
      queue.push([temp.left, height + 1])
    }
    if (temp.right) {
      queue.push([temp.right, height + 1])
    }
  }
  console.log(arrayKth)
}

const node3 = {
  value: 1,
  left: {
    value: 0
  },
  right: {
    value: 2,
    left: {
      value: 1.5
    },
    right: {
      value: 3,
      left: {
        value: 3.25
      }
    }
  }
}

printKthLevels(node3, 3) // 1
printKthLevels(node3, 2)
