console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (input) => {
  process.stdout.write(`Your name is: ${input}`);
  if (!process.stdin.isTTY) {
    console.log('This important software is now closing');
  }
  process.exit(0);
});
