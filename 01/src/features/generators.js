export function es5(n) {
  function counter(n) {
    var cnt = 0

    function next() {
      if (cnt < n) {
        return cnt += 1
      }
    }

    return next
  }

  return counter(n)
}

export function*es6(n) {
    let i = 0
    while(i < n) {
      i++
      yield i
    }
}
