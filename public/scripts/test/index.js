function StairCase(n) {
    if (n < 1 || n > 100) {
        return -1;
    }

    for (var i = 1; i <= n; i++) {
        var col = i;
        for (var j = 1; j <= n - col; j++) {
            process.stdout.write(' ');
        }
        for (var j = 1; j <= col; j++) {
            process.stdout.write('#')
        }
        process.stdout.write('\n');
    }
}

function summation(numbers) {

    if (numbers.length < 1 || numbers.length > 10000) {
        return -1;
    }

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] < 1 || numbers[i] > 10000) {
            return -1;
        }
    }

    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

function maxDifference(a) {
  var n = a.length;

  if (n < 1 || n > 2000000)
    return -1;

  var max = 1000000,
      min = -1000000;
  var diff = a[1] - a[0],
      minEle = a[0],
      i = 0;

  for (i; i < n; i++) {
    if (a[i] > max || a[i] < min) {
      return -1;
    }
  }

  for (i = 0; i < n; i++) {
    if (a[i] - minEle > diff)
      diff = a[i] - minEle;

    if (a[i] < minEle)
      minEle = a[i];
  }

  if (diff == 0)
    return -1;

  return diff;
}

function main() {
    var n = 4;
    var arr = [4, 1, 2, 3];
    var r = maxDifference(arr);
    /*console.log(r);*/
    /*StairCase(6);*/
    /*var r = summation(arr);*/
    console.log(r);
}

main();
