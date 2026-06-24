export default class HashTable {
  keyMap

  constructor() {
    this.keyMap = new Array(13)
  }

  _hash(key) {
    let total = 0
    let WEIRD_PRIME = 31
    for (let i = 0; i < Math.min(key.length, 10); i++) {
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length
    }
    return total
  }

  _tpl(key, value) {
    const arr = new Array()
    arr.push(key)
    arr.push(value)
    return arr
  }

  set(key, value) {
    let index = this._hash(key)
    if (!this.keyMap[index]) {
      const arr = new Array()
      arr.push(this._tpl(key, value))
      this.keyMap[index] = arr
    } else {
      for (const e of this.keyMap[index]) {
        if (e[0] == key) {
          e[1] = value
          return index
        }
      }
      this.keyMap[index].push(this._tpl(key, value))
    }
    return index
  }

  _getIndex(index) {
    return this.keyMap[index]
  }

  get(key) {
    const index = this._hash(key)
    if (!this.keyMap[index]) {
      return undefined
    } else {
      for (const e of this.keyMap[index]) {
        if (e[0] == key) {
          return e[1]
        }
      }
      return undefined
    }
  }

  keys() {
    const arr = new Array()
    for (const e of this.keyMap) {
      if (e) {
        for (const subE of e) {
          arr.push(subE[0])
        }
      }
    }
    return arr
  }

  values() {
    const arr = new Array()
    for (const e of this.keyMap) {
      if (e) {
        for (const subE of e) {
          const val = subE[1]
          if (!arr.includes(val)) {
            arr.push(subE[1])
          }
        }
      }
    }
    return arr
  }
}
