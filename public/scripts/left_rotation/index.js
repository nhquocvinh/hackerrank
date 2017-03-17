function left_rotation(arr, n, k) {
    var result = [];

    if (n < 2) {
        return arr;
    }

    if (k > n || k < 1) {
        return result;
    }

    var i = 0;
    for (i; i < n - k; i++) {
        result[i] = arr[k + i];
    }

    for (i; i < n; i++) {
        result[i] = arr[i - (n - k)];
    }

    return result;
}

var r = left_rotation([1, 2, 3, 4, 5, 6, 7, 8], 8, 4).join(' ');
console.log(r);
/*process.stdout.write(r);*/