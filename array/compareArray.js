const array1 = [1, 2, 3, 4]
const array2 = [3, 2, 1, 4]
teste(array1, array2)

/*
function teste(a, b) {
  const result = [0, 0]
  let alice = 0
  let bob = 0
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alice += 1
    }
    if (a[i] < b[i]) {
      bob += 1
    }
    if (a[i] === b[i]) {
      bob += 0
      alice += 0
    }
  }
  result.splice(0, 1, alice)
  result.splice(1, 1, bob)
  console.log(result)
}
*/

function teste(a, b) {
  let resul = [0, 0];
  let count = 3;
  for (let i = 0; i < count; i++) {
    a[i] > b[i] ? resul[0] += 1 : a[i] < b[i] ? resul[1] += 1 : null;
  }
  console.log(resul);
}