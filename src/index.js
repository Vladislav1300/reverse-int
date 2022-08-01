module.exports = function reverse (n) {
    let arr = String(n).split('')
    if(arr[0] === '-') {
      return arr.splice(1, arr.length).reverse().join('');
    }
    else return arr.reverse().join('');
}
