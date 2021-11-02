let toAnimate = '|/-\\|/-\\|/-\\|'
let n = 200;

for (let char of toAnimate) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, n);
  n += 200;
};

setTimeout(() => {console.log()}, n);