function maxDifference(a) {
  var n = a.length;

  if (n < 1 || n > 2000000)
    return -1;

  var max = 1000000,
      min = -1000000;
  var diff = a[1] - a[0],
      minElement = a[0],
      i = 0;

  for (i; i < n; i++) {
    if (a[i] > max || a[i] < min) {
      return -1;
    }
  }

  for (i = 0; i < n; i++) {
    if (a[i] - minElement > diff) {
      diff = a[i] - minElement;
    }

    if (a[i] < minElement) {
      minElement = a[i];
    }
  }

  if (diff == 0) {
    return -1;
  }

  return diff;
}

function main() {
  var n = 4;
  var arr = [4,1,2,3];
  var r = maxDifference(arr);
  console.log(r);
}

main();
