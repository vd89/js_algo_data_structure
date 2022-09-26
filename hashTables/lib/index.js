
function HashTable (_size = 127) {
  this.size = _size
  this.buckets = new Array(_size)
}
// Hash function
HashTable.prototype.hash = function (_key) {
  return _key.toString().length % this.size
}

// Add item in hash table
HashTable.prototype.setItem = function (_key, _value) {
  const _index = this.hash(_key)
  if (!this.buckets[_index]) {
    this.buckets[_index] = []
  }
  this.buckets[_index].push([_key, _value])
  return _index
}

// Get the Data back
HashTable.prototype.getItem = function (_key) {
  const _index = this.hash(_key)
  if (!this.buckets[_index]) {
    return null
  }
  for (const bucket of this.buckets[_index]) {
    if (bucket[0] === _key) {
      return bucket[1]
    }
  }
}

// get the complete bucket
HashTable.prototype.getBucket = function () {
  return this.buckets
}

module.exports = HashTable
