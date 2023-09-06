// fibonacci sequence
// fibo values: 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//       index: 1  2  3  4  5  6   7   8   9  ...

const fiboArray = (n) => {
  if (n <= 0) return [];

  let fibo_sequence = [0, 1];

  while (fibo_sequence.length <= n) {
    const next_value =
      fibo_sequence[fibo_sequence.length - 1] +
      fibo_sequence[fibo_sequence.length - 2];

    //fibo_sequence.push(next_value);
    fibo_sequence = [...fibo_sequence, next_value];
  }

  return fibo_sequence.slice(1, n + 1);
};

const n = 6;
const result = fiboArray(n);
console.log(`Fibo Array(${n}) = ${result}`);

/*

[1]
---
const fibo = (n) => {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    [prev, curr] = [curr, prev + curr];
  }

  return curr;
};

[2]
---
const fibo = (n) => {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  return fibo(n - 1) + fibo(n - 2);
};



*/
