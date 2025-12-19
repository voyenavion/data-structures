export default class MBH {
  values: Array<number>
  constructor() {
    this.values = []
  }

  //if you guarantee insert places the element correctly then you don't have to reorder the whole thing
  insert(value: number): Array<number> {
    this.values.push(value)
    this.bubbleUp(this.values)
    return this.values
  }

  bubbleUp(arr) {
    let childIndex = arr.length - 1
    let parentIndex = this.indexOfParent(childIndex)
    let parent
    while (childIndex > 0) {
      parentIndex = this.indexOfParent(childIndex)
      parent = arr[parentIndex]
      if (parent > arr[childIndex]) break
      arr[parentIndex] = arr[childIndex]
      arr[childIndex] = parent
      childIndex = parentIndex
    }
  }

  indexOfParent(childIndex: number) {
    return Math.floor((childIndex - 1) / 2)
  }

  extractMax() {
    let i = 0
    const arr = this.values
    const result = arr[i]
    const element = arr.pop()
    if (arr.length > 0) {
      arr[i] = element
      const leftChildIdx = (i) => i * 2 + 1
      const rightChildIdx = (i) => i * 2 + 2
      const swap = (top, bottom, element) => {
        arr[top] = arr[bottom]
        arr[bottom] = element
      }
      let candidateIndex
      while (arr[leftChildIdx(i)]) {
        if (arr[rightChildIdx(i)]) {
          candidateIndex =
            arr[leftChildIdx(i)] >= arr[rightChildIdx(i)]
              ? leftChildIdx(i)
              : rightChildIdx(i)
        } else {
          candidateIndex = leftChildIdx(i)
        }

        if (element < arr[candidateIndex]) {
          swap(i, candidateIndex, element)
          i = candidateIndex
        } else {
          break
        }
      }
    }

    return result
  }
}
