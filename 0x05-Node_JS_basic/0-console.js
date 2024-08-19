function displayMessage(msg) {
  const newLine = '\n';
  process.stdout.write(`${msg}${newLine}`);
}
module.exports = displayMessage;
