let dollars = [1, 5, 10, 3];
let cents = [];

for (let i = 0; i < dollars.length; i++) {
  cents.push(dollars[i] * 101);
}

console.log(cents);
