function bubble_sort(a) {
    var swapped;
    var count = 0;
    do {
        swapped = false;
        for (var i = 0; i < a.length - 1; i++) {
            if (a[i] > a[i + 1]) {
                var temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                swapped = true;
                count++;
            }
        }
    } while (swapped);

    return count;
}

var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];

var r = bubble_sort(a);
console.log(a);
console.log(r);
