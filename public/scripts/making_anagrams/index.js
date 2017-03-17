function making_anagrams(a, b) {
  if (!a || !b) return 0;
  if (a.length > 10000 || b.length > 10000) return 0;

  let i = 0,
      count = 0,
      totalLength = a.length + b.length,
      temp = 0;
  let t1 = null,
      t2 = null,
      r1 = null,
      r2 = null;

  for (i; i < a.length; i++) {

    t1 = a.charAt(i);
    r2 = b.split(t1).length - 1;

    if (r2 > 0) {
      r1 = a.split(t1).length - 1;

      temp = Math.abs(r1 - r2);
      count = count + r1 + r2 - temp;
      b = b.split(t1).join('');
    }
  }

  count = totalLength - count;
  return count;
}

let a = 'fcrxzwscanmligyxyvym';
let b = 'jxwtrhvujlmrpdoqbisbwhmgpmeoke';

let r = making_anagrams(a, b);
console.log(r);