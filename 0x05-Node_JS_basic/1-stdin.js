console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (input) => {
  if (input !== null && process.stdin.isTTY === true) {
    process.stdout.write(`Your name is: ${input}`);
    process.exit(0);
  }
  if (process.stdin.isTTY === false) {
    process.stdout.write(`Your name is: ${input}`);
    process.stdout.write('This important software is now closing');
    process.exit(0);
  }
});
